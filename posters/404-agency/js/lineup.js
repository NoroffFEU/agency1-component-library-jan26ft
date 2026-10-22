// ══════ SECTION 2 · LINEUP (Paula) ══════
//
// NOTE: All JS files share the same global scope.
// Use specific names for top-level variables and functions,
// e.g. lineupCards instead of cards, to avoid clashing with
// other files. Only select elements inside .lineup.

// Artist data: the key matches data-artist in the HTML
const lineupArtists = {
'AURORA': {
    name: 'Aurora', role: 'Headline · Hovedscene', tags: ['Bergen', 'Art-pop', '23:15'],
    bio: 'Bergen-born art-pop singer known for ethereal, otherworldly vocals and theatrical, deeply physical live shows that have made her a festival favourite across Europe.',
    no: 'Eventyrlig art-pop fra Bergen — én av Norges mest særegne stemmer.'
},
'KYGO': {
    name: 'Kygo', role: 'Headline · Klubben', tags: ['Bergen', 'Tropical house', '00:15'],
    bio: 'The Bergen producer who helped define tropical house and turned melodic dance music into a global stadium phenomenon. Expect a euphoric closing set.',
    no: 'Mannen bak tropical house — global klubbeksport fra Bergen.'
},
'SIGRID': {
    name: 'Sigrid', role: 'Taket', tags: ['Ålesund', 'Pop', '19:00'],
    bio: 'Ålesund pop force with anthemic hooks and a raw, unfussy stage presence. Broke through internationally while still a teenager and has been writing arena-sized choruses ever since.',
    no: 'Pop med rå energi og refrenger laget for allsang.'
},
'KARPE': {
    name: 'Karpe', role: 'Klubben', tags: ['Oslo', 'Hip-hop', '22:45'],
    bio: 'Oslo hip-hop duo famous for ambitious, genre-spanning records and record-breaking, sold-out productions — including a historic ten-night run at Oslo Spektrum.',
    no: 'Norsk hiphop på sitt mest ambisiøse — utsolgt gang på gang.'
},
'GIRL IN RED': {
    name: 'girl in red', role: 'Taket', tags: ['Horten', 'Indie-pop', '20:45'],
    bio: 'The recording project of Marie Ulven, whose intimate bedroom-pop became a global streaming phenomenon long before the festival main stages came calling.',
    no: 'Soveroms-pop fra Horten som ble en verdensomspennende bevegelse.'
},
'CEZINANDO': {
    name: 'Cezinando', role: 'Hovedscene', tags: ['Oslo', 'Rap', '21:45'],
    bio: 'Oslo rapper and songwriter blending introspective, literary lyricism with restless, genre-bending production. One of the most acclaimed voices in modern Norwegian rap.',
    no: 'Introspektiv, sjangeroverskridende rap fra Oslo.'
},
'ASTRID S': {
    name: 'Astrid S', role: 'Hovedscene', tags: ['Berkåk', 'Pop', '20:30'],
    bio: 'Pop songwriter from tiny Berkåk who broke through young and built a devoted international audience on crisp, emotional pop and a magnetic live energy.',
    no: 'Skarp, følelsesladd pop fra lille Berkåk til hele verden.'
},
'HKEEM': {
    name: 'Hkeem', role: 'Hovedscene', tags: ['Lørenskog', 'Rap', '19:30'],
    bio: 'Lørenskog rapper whose breakout singles and high-energy, crowd-igniting delivery made him one of the defining sounds of a new Norwegian rap generation.',
    no: 'Eksplosiv rap som tenner publikum fra første takt.'
},
'ARIF': {
    name: 'Arif', role: 'Klubben', tags: ['Oslo', 'R&B / Rap', '20:00'],
    bio: 'Oslo artist working in melodic, melancholic R&B and rap — a storyteller whose moody, atmospheric sound has quietly shaped the city’s scene for over a decade.',
    no: 'Melodisk, melankolsk R&B og rap fra Oslo.'
},
'UNGE FERRARI': {
    name: 'Unge Ferrari', role: 'Klubben', tags: ['Oslo', 'Hip-hop', '21:15'],
    bio: 'Oslo hip-hop artist known for sun-soaked, melodic anthems that have become fixtures of the Norwegian summer — equal parts party and heart.',
    no: 'Solfylte, melodiske sommeranthems fra Oslo.'
}
};

// Elements
const lineupModal = document.getElementById('lineupModal');
const lineupRole = document.getElementById('modalRole');
const lineupName = document.getElementById('modalName');
const lineupTags = document.getElementById('modalTags');
const lineupBio = document.getElementById('modalBio');
const lineupBioNo = document.getElementById('modalBioNo');
let lineupLastFocus = null;

// Open the modal with one artist's info
function openLineupModal(key) {
const artist = lineupArtists[key];
if (!artist) return;

  lineupLastFocus = document.activeElement; // remember which button was clicked

lineupRole.textContent = artist.role;
lineupName.textContent = artist.name;
lineupBio.textContent = artist.bio;
lineupBioNo.textContent = artist.no;

lineupTags.innerHTML = '';
artist.tags.forEach(function (tag) {
    const span = document.createElement('span');
    span.className = 'modal__tag';
    span.textContent = tag;
    lineupTags.appendChild(span);
});

lineupModal.classList.add('open');
  document.body.style.overflow = 'hidden'; // stop the page scrolling behind
lineupModal.querySelector('.modal__close').focus();
}

// Close the modal
function closeLineupModal() {
lineupModal.classList.remove('open');
document.body.style.overflow = '';
  if (lineupLastFocus) lineupLastFocus.focus(); // go back to the button
}

// Click ⓘ → open
document.querySelectorAll('.lineup .info-btn').forEach(function (btn) {
btn.addEventListener('click', function () {
    openLineupModal(btn.dataset.artist);
});
});

// Click ✕ or the dark background → close
lineupModal.querySelectorAll('[data-close]').forEach(function (el) {
el.addEventListener('click', closeLineupModal);
});

// Escape key → close
document.addEventListener('keydown', function (e) {
if (e.key === 'Escape' && lineupModal.classList.contains('open')) {
    closeLineupModal();
}
});