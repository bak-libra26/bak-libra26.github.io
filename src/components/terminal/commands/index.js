import { execLs, execCd, execPwd, execTree } from './navigation.js';
import { execCat, execVi, execOpen, execWget } from './file-ops.js';
import { execGrep, execFind, execWc } from './search.js';
import { execHelp, execHistory, execWhoami, execClear, execExit, execNeofetch } from './system.js';
import { execFortune, execCowsay, execSl } from './fun.js';

const COMMANDS = new Map([
  ['ls', execLs],
  ['cd', execCd],
  ['pwd', execPwd],
  ['tree', execTree],
  ['cat', execCat],
  ['vi', execVi],
  ['vim', execVi],
  ['open', execOpen],
  ['grep', execGrep],
  ['find', execFind],
  ['wc', execWc],
  ['wget', execWget],
  ['help', execHelp],
  ['history', execHistory],
  ['whoami', execWhoami],
  ['clear', execClear],
  ['exit', execExit],
  ['neofetch', execNeofetch],
  ['fortune', execFortune],
  ['cowsay', execCowsay],
  ['sl', execSl],
]);

export default COMMANDS;
