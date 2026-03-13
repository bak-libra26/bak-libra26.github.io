export function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/`/g, '&#96;');
}

export function escPath(s) {
  return s.replace(/ /g, '\\ ');
}
