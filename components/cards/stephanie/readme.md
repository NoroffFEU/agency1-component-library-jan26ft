# Team Member Card

A simple team member card designed for an agency website. The card includes an avatar, name, role, short bio, skills, and a profile link.

## How to use

Copy the `.team-card` HTML structure and include `style.css`. Replace the name, role, bio, initials, and skills with your own content.

## Design decisions

- BEM naming keeps the CSS organised and scoped to the component
- Initials are used instead of an external image
- Skill tags make the user's main skills easy to identify
- A simple neutral colour palette keeps the design clean and reusable
- The profile link includes hover and keyboard focus states for better usability and accessibility

## Known limitations

- The avatar only displays initials and does not support profile images
- The profile link currently uses a placeholder URL
- The component does not include any JavaScript functionality