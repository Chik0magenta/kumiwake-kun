'use strict';

const translations = {
  "ja": {
    "local": "このブラウザ内でのみ処理",
    "rosterStep": "名簿入力",
    "attendanceTitle": "今日の出欠",
    "resultsStep": "グループ分け結果",
    "prepare": "授業の準備",
    "rosterTitle": "今日は誰と話しましょう？",
    "rosterIntro": "名簿を入力して、今日のグループを作りましょう。",
    "rosterLabel": "学生名簿",
    "onePerLine": "1行に1人",
    "rosterHint": "空行は無視し、同姓同名の学生も別々に扱います。",
    "resetHint": "名簿を反映すると、全員出席で始まります。",
    "applyRoster": "名簿を反映",
    "threeSteps": "かんたん3ステップ",
    "guideTitle": "グループ分けは手早く、会話の時間はたっぷり。",
    "guideOne": "名簿を入力",
    "guideOneHint": "名前の貼り付けやTXTファイルの読み込みができます。",
    "guideTwo": "欠席者を確認",
    "guideTwoHint": "学生を押すと出欠が切り替わります。",
    "guideThree": "グループを作って表示",
    "guideThreeHint": "ランダムに、人数が均等になるように分けます。",
    "sessionHint": "ページを再読み込みするか閉じると、名簿は消えます。",
    "attendanceEyebrow": "参加する学生を確認",
    "attendanceIntro": "欠席する学生を押して除外してください。出席者だけでグループを作ります。",
    "selectAll": "全員出席",
    "deselectAll": "全員欠席",
    "groupCount": "グループ数",
    "balanceHint": "グループ間の人数差は最大1人です。",
    "makeGroups": "グループ分け",
    "editRoster": "名簿を編集",
    "resultsEyebrow": "さあ、会話を始めましょう",
    "resultsTitle": "今日のグループ分け",
    "editAttendance": "出欠を編集",
    "reshuffle": "もう一度シャッフル",
    "privacy": "入力した学生名簿はサーバーに送信・保存されず、このブラウザ内でのみ処理されます。",
    "stepsLabel": "進行状況",
    "decrease": "グループ数を減らす",
    "increase": "グループ数を増やす",
    "placeholder": "例：学生あ\n学生い\n学生う",
    "fileLabel": "TXT名簿を読み込む",
    "fileHint": "UTF-8・1行に1人。読み込み後に「名簿を反映」を押してください。",
    "fileLoading": "読み込み中…",
    "fileLoaded": "名簿を入力欄に読み込みました。「名簿を反映」を押してください。",
    "fileTypeError": "UTF-8の.txtファイルを選択してください。",
    "fileReadError": "ファイルを読み込めませんでした。もう一度選択してください。",
    "fileEncodingError": "UTF-8のテキストとして読み込めません。UTF-8で保存し直してください。",
    "emptyRoster": "学生の名前を1人以上入力してください。",
    "noPresent": "出席者がいません。1人以上を出席にしてください。",
    "invalidCount": "グループ数は1以上の整数で入力してください。",
    "tooManyGroups": "グループ数は出席者数以下にしてください。",
    "present": "出席",
    "absent": "欠席",
    "attendanceCount": "出席 {present} / 全体 {total}",
    "groupTitle": "グループ {number}",
    "members": "{count}人",
    "resultsSummary": "出席 {count}人 · {groups}グループ",
    "resultsStatus": "{number}回目のグループ分け · 同じ条件でもう一度シャッフルできます。"
  },
  "ko": {
    "local": "브라우저 안에서만 처리",
    "rosterStep": "명단 입력",
    "attendanceTitle": "오늘의 출석",
    "resultsStep": "조 편성 결과",
    "prepare": "수업 준비",
    "rosterTitle": "오늘은 누구와 이야기할까요?",
    "rosterIntro": "명단을 입력하고, 오늘 함께할 학생들을 조로 나눠보세요.",
    "rosterLabel": "학생 명단",
    "onePerLine": "한 줄에 한 명",
    "rosterHint": "빈 줄은 건너뛰고, 같은 이름은 각각 다른 학생으로 처리해요.",
    "resetHint": "명단 적용 시 전원 출석으로 시작합니다.",
    "applyRoster": "명단 적용",
    "threeSteps": "간단한 세 단계",
    "guideTitle": "조 편성은 가볍게, 회화 시간은 넉넉하게.",
    "guideOne": "명단을 입력하세요",
    "guideOneHint": "이름을 붙여넣거나 TXT 파일로 불러올 수 있어요.",
    "guideTwo": "결석자를 확인하세요",
    "guideTwoHint": "학생을 누르면 출석 상태가 바뀝니다.",
    "guideThree": "조를 만들고 보여주세요",
    "guideThreeHint": "무작위로 섞어 균등하게 나눠드립니다.",
    "sessionHint": "명단은 이 페이지를 새로고침하거나 닫으면 사라집니다.",
    "attendanceEyebrow": "함께할 학생 확인",
    "attendanceIntro": "결석한 학생을 눌러 제외하세요. 출석한 학생만 조에 배정됩니다.",
    "selectAll": "전체 선택",
    "deselectAll": "전체 해제",
    "groupCount": "조 개수",
    "balanceHint": "각 조의 인원 차이는 최대 1명입니다.",
    "makeGroups": "무작위 조 편성",
    "editRoster": "명단 수정",
    "resultsEyebrow": "이제 대화를 시작해볼까요?",
    "resultsTitle": "오늘의 조 편성",
    "editAttendance": "출석 수정",
    "reshuffle": "다시 섞기",
    "privacy": "입력한 학생 명단은 서버로 전송되거나 저장되지 않으며 현재 브라우저에서만 처리됩니다.",
    "stepsLabel": "진행 단계",
    "decrease": "조 개수 줄이기",
    "increase": "조 개수 늘리기",
    "placeholder": "예: 학생가\n학생나\n학생다",
    "fileLabel": "TXT 명단 불러오기",
    "fileHint": "UTF-8, 한 줄에 한 명. 불러온 뒤 ‘명단 적용’을 눌러 주세요.",
    "fileLoading": "불러오는 중…",
    "fileLoaded": "입력란에 명단을 불러왔습니다. ‘명단 적용’을 눌러 주세요.",
    "fileTypeError": "UTF-8 .txt 파일을 선택해 주세요.",
    "fileReadError": "파일을 읽을 수 없습니다. 다시 선택해 주세요.",
    "fileEncodingError": "UTF-8 텍스트로 읽을 수 없습니다. UTF-8로 다시 저장해 주세요.",
    "emptyRoster": "학생 이름을 한 명 이상 입력해 주세요.",
    "noPresent": "출석한 학생이 없습니다. 한 명 이상 출석으로 선택해 주세요.",
    "invalidCount": "조 개수는 1 이상의 정수로 입력해 주세요.",
    "tooManyGroups": "조 개수는 출석 학생 수보다 많을 수 없습니다.",
    "present": "출석",
    "absent": "결석",
    "attendanceCount": "출석 {present} / 전체 {total}",
    "groupTitle": "{number}조",
    "members": "{count}명",
    "resultsSummary": "출석 {count}명 · {groups}개 조",
    "resultsStatus": "{number}번째 편성 완료 · 같은 조건으로 다시 섞을 수 있습니다."
  }
};
let language = 'ja';
let currentGroups = [];

function t(key, values = {}) {
  return translations[language][key].replace(/\{(\w+)\}/g, (_, name) => String(values[name]));
}

function setMessage(id, key) {
  const element = document.getElementById(id);
  if (key) element.dataset.i18n = key;
  else delete element.dataset.i18n;
  element.textContent = key ? t(key) : '';
}


let students = [];
let activeGroupCount = 6;
let generationCount = 0;
let fallbackId = 0;
const namesInput = document.getElementById('student-names');
const groupCountInput = document.getElementById('group-count');
const attendanceList = document.getElementById('attendance-list');
const screens = ['roster', 'attendance', 'results'];

function parseStudentNames(text) {
  return text.split(/\r\n|\n|\r/).map(name => name.trim()).filter(Boolean).map(name => ({
    id: globalThis.crypto?.randomUUID?.() ?? `student-${++fallbackId}`,
    name,
    present: true
  }));
}

function showScreen(screen) {
  document.body.dataset.screen = screen;
  screens.forEach((name, index) => {
    document.getElementById(`${name}-screen`).hidden = name !== screen;
    const step = document.querySelectorAll('.steps li')[index];
    if (name === screen) step.setAttribute('aria-current', 'step');
    else step.removeAttribute('aria-current');
  });
  document.getElementById(`${screen}-title`).focus();
}

function updateAttendanceCount() {
  const presentCount = students.filter(student => student.present).length;
  document.getElementById('attendance-count').textContent = t('attendanceCount', { present: presentCount, total: students.length });
}

function updateStudentButton(button, student) {
  button.setAttribute('aria-pressed', String(student.present));
  button.querySelector('.student-check').textContent = student.present ? '✓' : '−';
  button.querySelector('.student-state').textContent = t(student.present ? 'present' : 'absent');
}

function renderAttendance() {
  attendanceList.replaceChildren();
  students.forEach(student => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'student';
    button.dataset.studentId = student.id;
    const check = document.createElement('span');
    check.className = 'student-check';
    check.setAttribute('aria-hidden', 'true');
    const name = document.createElement('span');
    name.className = 'student-name';
    name.textContent = student.name;
    const status = document.createElement('span');
    status.className = 'student-state';
    button.append(check, name, status);
    updateStudentButton(button, student);
    attendanceList.append(button);
  });
  updateAttendanceCount();
}

function toggleAttendance(id) {
  const student = students.find(student => student.id === id);
  if (!student) return;
  student.present = !student.present;
  const button = Array.from(attendanceList.children).find(button => button.dataset.studentId === id);
  updateStudentButton(button, student);
  updateAttendanceCount();
  setMessage('group-error', '');
}

function shuffleStudents(list) {
  const shuffled = [...list];
  for (let index = shuffled.length - 1; index > 0; index--) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

function createGroups(presentStudents, count) {
  const groups = Array.from({ length: count }, () => []);
  shuffleStudents(presentStudents).forEach((student, index) => groups[index % count].push(student));
  return groups;
}

function renderGroups(groups) {
  currentGroups = groups;
  const container = document.getElementById('groups');
  container.dataset.groupCount = String(groups.length);
  container.replaceChildren();
  groups.forEach((group, index) => {
    const card = document.createElement('article');
    card.className = 'group-card';
    const header = document.createElement('header');
    const heading = document.createElement('h2');
    heading.textContent = t('groupTitle', { number: index + 1 });
    const count = document.createElement('span');
    count.textContent = t('members', { count: group.length });
    header.append(heading, count);
    const list = document.createElement('ul');
    group.forEach(student => {
      const item = document.createElement('li');
      item.textContent = student.name;
      list.append(item);
    });
    card.append(header, list);
    container.append(card);
  });
  document.getElementById('results-summary').textContent = t('resultsSummary', { count: groups.flat().length, groups: groups.length });
  document.getElementById('results-status').textContent = t('resultsStatus', { number: generationCount });
}

document.getElementById('roster-form').addEventListener('submit', event => {
  event.preventDefault();
  const parsed = parseStudentNames(namesInput.value);
  if (!parsed.length) {
    setMessage('roster-error', 'emptyRoster');
    namesInput.setAttribute('aria-invalid', 'true');
    namesInput.focus();
    return;
  }
  setMessage('roster-error', '');
  setMessage('group-error', '');
  namesInput.removeAttribute('aria-invalid');
  students = parsed;
  renderAttendance();
  showScreen('attendance');
});

attendanceList.addEventListener('click', event => {
  const button = event.target.closest('button[data-student-id]');
  if (button) toggleAttendance(button.dataset.studentId);
});

function setAllAttendance(present) {
  students.forEach(student => { student.present = present; });
  setMessage('group-error', '');
  renderAttendance();
}
document.getElementById('select-all').addEventListener('click', () => setAllAttendance(true));
document.getElementById('deselect-all').addEventListener('click', () => setAllAttendance(false));

function adjustGroupCount(change) {
  const current = Number(groupCountInput.value);
  groupCountInput.value = Math.max(1, (Number.isSafeInteger(current) ? current : 6) + change);
  groupCountInput.removeAttribute('aria-invalid');
  setMessage('group-error', '');
}
document.getElementById('decrease-groups').addEventListener('click', () => adjustGroupCount(-1));
document.getElementById('increase-groups').addEventListener('click', () => adjustGroupCount(1));

const groupForm = document.getElementById('group-form');
groupForm.noValidate = true;
groupForm.addEventListener('submit', event => {
  event.preventDefault();
  const presentStudents = students.filter(student => student.present);
  const count = Number(groupCountInput.value);
  let message = '';
  if (!presentStudents.length) message = 'noPresent';
  else if (!Number.isSafeInteger(count) || count < 1) message = 'invalidCount';
  else if (count > presentStudents.length) message = 'tooManyGroups';
  setMessage('group-error', message);
  if (message) {
    if (presentStudents.length) {
      groupCountInput.setAttribute('aria-invalid', 'true');
      groupCountInput.focus();
    }
    return;
  }
  groupCountInput.removeAttribute('aria-invalid');
  activeGroupCount = count;
  generationCount++;
  renderGroups(createGroups(presentStudents, count));
  showScreen('results');
});

document.getElementById('reshuffle').addEventListener('click', () => {
  generationCount++;
  renderGroups(createGroups(students.filter(student => student.present), activeGroupCount));
});
document.getElementById('edit-attendance').addEventListener('click', () => showScreen('attendance'));
document.querySelectorAll('.edit-roster').forEach(button => {
  button.addEventListener('click', () => showScreen('roster'));
});

function setLanguage(nextLanguage) {
  if (!Object.hasOwn(translations, nextLanguage)) return;
  language = nextLanguage;
  document.documentElement.lang = language;
  document.title = 'Kumiwake-kun · 組み分けくん';
  document.querySelectorAll('[data-i18n]').forEach(element => {
    element.textContent = t(element.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-aria]').forEach(element => {
    element.setAttribute('aria-label', t(element.dataset.i18nAria));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
    element.placeholder = t(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll('[data-language]').forEach(button => {
    button.setAttribute('aria-pressed', String(button.dataset.language === language));
  });
  // Translate labels only; never parse the draft or shuffle existing groups here.
  renderAttendance();
  if (currentGroups.length) renderGroups(currentGroups);
}

document.querySelectorAll('[data-language]').forEach(button => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});

const fileInput = document.getElementById('roster-file');
async function importRosterFile(file) {
  if (!file) return;
  setMessage('file-error', '');
  setMessage('file-status', '');
  if (!/\.txt$/i.test(file.name)) {
    setMessage('file-error', 'fileTypeError');
    fileInput.value = '';
    return;
  }
  fileInput.disabled = true;
  setMessage('file-status', 'fileLoading');
  try {
    const bytes = await file.arrayBuffer();
    let text;
    try {
      text = new TextDecoder('utf-8', { fatal: true }).decode(bytes);
    } catch {
      setMessage('file-error', 'fileEncodingError');
      setMessage('file-status', '');
      return;
    }
    namesInput.value = text;
    namesInput.removeAttribute('aria-invalid');
    setMessage('roster-error', '');
    setMessage('file-status', 'fileLoaded');
  } catch {
    setMessage('file-error', 'fileReadError');
    setMessage('file-status', '');
  } finally {
    fileInput.disabled = false;
    fileInput.value = '';
  }
}
fileInput.addEventListener('change', () => importRosterFile(fileInput.files[0]));
setLanguage('ja');
