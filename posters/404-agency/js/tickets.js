// ══════ SECTION 3 · TICKETS (Victoria) ══════
//
// NOTE: All JS files share the same global scope.
// Use specific names for top-level variables and functions,
// e.g. ticketStub instead of stub, to avoid clashing with
// other files. Only select elements inside .tickets.

(() => {
  const ticketSection = document.querySelector('.tickets');
  if (!ticketSection) return;

  const ticket = ticketSection.querySelector('#ticket');
  const ticketStub = ticketSection.querySelector('#tk-stub');
  const ticketEmail = ticketSection.querySelector('#tk-email');
  const ticketPhone = ticketSection.querySelector('#tk-phone');
  const ticketError = ticketSection.querySelector('#tk-err');

  const TEAR_DISTANCE = 80;

  let startX = 0;
  let startY = 0;
  let isDragging = false;

  const isMobile = () => window.matchMedia('(max-width: 640px)').matches;

  function validateTicketForm() {
    const email = ticketEmail.value.trim();
    const phoneDigits = ticketPhone.value.replace(/\D/g, '');

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const phoneOk = phoneDigits.length >= 8;

    ticketEmail.classList.toggle('is-invalid', !emailOk);
    ticketPhone.classList.toggle('is-invalid', !phoneOk);

    if (!emailOk && !phoneOk) {
      return 'Fyll inn e-post og mobilnummer / Enter email and phone';
    }
    if (!emailOk) {
      return 'Ugyldig e-post / Invalid email';
    }
    if (!phoneOk) {
      return 'Ugyldig mobilnummer / Invalid phone number';
    }
    return '';
  }

  function claimTicket() {
    if (ticket.classList.contains('is-claimed')) return;

    const errorText = validateTicketForm();

    if (errorText) {
      ticketError.textContent = errorText;
      ticketStub.style.transform = '';
      ticket.classList.remove('is-shaking');
      void ticket.offsetWidth;
      ticket.classList.add('is-shaking');
      return;
    }

    ticketError.textContent = '';
    ticketStub.style.transform = '';
    ticket.classList.add('is-claimed');
    ticketStub.setAttribute('aria-label', 'Billett sikret. Sjekk innboksen din / Got it, check your inbox');
    ticketEmail.disabled = true;
    ticketPhone.disabled = true;
  }

  ticketStub.addEventListener('pointerdown', (event) => {
    if (ticket.classList.contains('is-claimed')) return;
    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;
    ticketStub.classList.add('is-dragging');
    ticketStub.setPointerCapture(event.pointerId);
  });

  ticketStub.addEventListener('pointermove', (event) => {
    if (!isDragging) return;

    if (isMobile()) {
      const distance = Math.max(0, event.clientY - startY);
      ticketStub.style.transform = `translateY(${distance}px)`;
    } else {
      const distance = Math.max(0, event.clientX - startX);
      ticketStub.style.transform = `translateX(${distance}px) rotate(${distance / 20}deg)`;
    }
  });

  function endDrag(event) {
    if (!isDragging) return;
    isDragging = false;
    ticketStub.classList.remove('is-dragging');

    const distance = isMobile()
      ? event.clientY - startY
      : event.clientX - startX;

    if (distance > TEAR_DISTANCE) {
      claimTicket();
    } else {
      ticketStub.style.transform = '';
    }
  }

  ticketStub.addEventListener('pointerup', endDrag);
  ticketStub.addEventListener('pointercancel', endDrag);

  ticketStub.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      claimTicket();
    }
  });

  [ticketEmail, ticketPhone].forEach((input) => {
    input.addEventListener('input', () => {
      input.classList.remove('is-invalid');
      ticketError.textContent = '';
    });
  });

  ticket.addEventListener('animationend', () => {
    ticket.classList.remove('is-shaking');
  });
})();