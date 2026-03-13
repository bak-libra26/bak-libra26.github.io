export const FILE_ICONS = {
  dir: '&#x1F4C1;',     // 📁
  md: '&#x1F4C4;',      // 📄
  png: '&#x1F5BC;',     // 🖼️
  jpg: '&#x1F5BC;',     // 🖼️
  jpeg: '&#x1F5BC;',    // 🖼️
  gif: '&#x1F5BC;',     // 🖼️
  svg: '&#x1F5BC;',     // 🖼️
  webp: '&#x1F5BC;',    // 🖼️
  sh: '&#x1F4DC;',      // 📜
  txt: '&#x1F4DD;',     // 📝
  hidden: '&#x1F512;',  // 🔒
  default: '&#x1F4C3;', // 📃
};

export function getFileIcon(name, isDir) {
  if (isDir) return FILE_ICONS.dir;
  if (name.startsWith('.')) return FILE_ICONS.hidden;
  const ext = name.split('.').pop().toLowerCase();
  return FILE_ICONS[ext] || FILE_ICONS.default;
}
