export function resolveScript(cmd, args, cwd, vfs, resolve) {
  let target = null;

  if (cmd.startsWith('./')) {
    target = cmd.slice(2);
  } else if ((cmd === 'bash' || cmd === 'sh') && args.length === 1) {
    target = args[0];
  }

  if (target === null) return null;

  const candidates = [target, target.endsWith('.sh') ? null : target + '.sh'].filter(Boolean);
  for (const c of candidates) {
    const path = resolve(cwd, c);
    if (vfs.getNode(path) === 'script') return path;
  }
  return null;
}
