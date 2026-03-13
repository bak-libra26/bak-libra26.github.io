function toDate(value) {
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? new Date(0) : d;
}

function pad2(n) {
  return String(n).padStart(2, '0');
}

const DateUtil = {
  formatDate(date) {
    const d = toDate(date);
    return `${d.getFullYear()}년 ${pad2(d.getMonth() + 1)}월 ${pad2(d.getDate())}일`;
  },

  formatShortDate(date) {
    const d = toDate(date);
    return `${d.getFullYear()}. ${pad2(d.getMonth() + 1)}. ${pad2(d.getDate())}`;
  },

  formatISOShort(date) {
    const d = toDate(date);
    return `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
  },

  formatISO(date) {
    return toDate(date).toISOString();
  },

  formatLs(date) {
    const d = toDate(date);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${months[d.getMonth()]} ${String(d.getDate()).padStart(2, ' ')}`;
  },
};

export default DateUtil;
