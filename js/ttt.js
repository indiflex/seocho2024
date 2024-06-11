const data = `OT	OT (강의 일정 및 소개)	 05월 13일 (월)	3.5
풀스택 공통	컴퓨터 구조와 컴파일러	 05월 14일 (화)	4.5
풀스택 공통	HTML / CSS	 05월 16일 (목)	3.5
풀스택 공통	TailwindCSS	 05월 18일 (토)	7.0
풀스택 공통	Git & GitHub	 05월 21일 (화)	4.5
풀스택 공통	Git & GitHub	 05월 23일 (목)	3.5
풀스택 공통	Git & GitHub	 05월 25일 (토)	7.0
프로그래밍 언어	JavaScript의 이해	 05월 28일 (화)	4.5
프로그래밍 언어	JavaScript의 이해	 05월 30일 (목)	3.5
프로그래밍 언어	JavaScript의 이해	 06월 01일 (토)	7.0
프로그래밍 언어	JavaScript의 이해	 06월 04일 (화)	4.5
프로그래밍 언어	JavaScript 실무 기법	 06월 08일 (토)	7.0
프로그래밍 언어	JavaScript 실무 기법	 06월 11일 (화)	4.5
프로그래밍 언어	JavaScript 실무 기법	 06월 13일 (목)	3.5
프로그래밍 언어	TypeScript의 이해	 06월 15일 (토)	7.0
프로그래밍 언어	TypeScript의 이해	 06월 18일 (화)	4.5
프로그래밍 언어	TypeScript의 이해	 06월 20일 (목)	3.5
프로그래밍 언어	TypeScript 실무코딩스킬	 06월 22일 (토)	7.0
프로그래밍 언어	TypeScript 실무코딩스킬	 06월 25일 (화)	4.5
프로그래밍 언어	TypeScript 실무코딩스킬	 06월 27일 (목)	3.5
프로그래밍 언어	TypeScript 실무코딩스킬	 06월 29일 (토)	7.0
프런트엔드 개발	React	 07월 02일 (화)	4.5
프런트엔드 개발	React	 07월 04일 (목)	4.5
프런트엔드 개발	React	 07월 06일 (토)	7.0
프런트엔드 개발	React	 07월 09일 (화)	4.5
프런트엔드 개발	React	 07월 11일 (목)	4.5
프런트엔드 개발	React	 07월 13일 (토)	7.0
프런트엔드 개발	React	 07월 16일 (화)	4.5
프런트엔드 개발	React	 07월 18일 (목)	4.5
프런트엔드 개발	React	 07월 23일 (화)	3.5
프런트엔드 개발	React	 07월 25일 (목)	3.5
프런트엔드 개발	Next.js	 07월 27일 (토)	7.0
프런트엔드 개발	Next.js	 07월 30일 (화)	3.5
프런트엔드 개발	Next.js	 08월 01일 (목)	3.5
프런트엔드 개발	Next.js	 08월 06일 (화)	3.5
프런트엔드 개발	Next.js	 08월 08일 (목)	3.5
백엔드 개발	클라우드와 리눅스	 08월 10일 (토)	7.0
백엔드 개발	클라우드와 리눅스	 08월 13일 (화)	3.5
백엔드 개발	리눅스와 도커	 08월 17일 (토)	7.0
백엔드 개발	데이터베이스	 08월 20일 (화)	3.5
백엔드 개발	데이터베이스	 08월 22일 (목)	3.5
백엔드 개발	데이터베이스	 08월 24일 (토)	7.0
백엔드 개발	Git-Flow 팀 코딩	 08월 27일 (화)	3.5
백엔드 개발	Node.js의 이해	 08월 29일 (목)	3.5
백엔드 개발	Node.js 실무	 09월 03일 (화)	3.5
백엔드 개발	Node.js 실무	 09월 05일 (목)	3.5
백엔드 개발	Nest.js로 서버 API 만들기	 09월 07일 (토)	7.0
백엔드 개발	Nest.js로 서버 API 만들기	 09월 10일 (화)	3.5
백엔드 개발	Nest.js로 서버 API 만들기	 09월 12일 (목)	3.5
백엔드 개발	Nest.js로 서버 API 만들기	 09월 24일 (화)	3.5
포트폴리오 프로젝트	포트폴리오	 09월 26일 (목)	3.5
포트폴리오 프로젝트	포트폴리오	 09월 28일 (토)	7.0
포트폴리오 프로젝트	포트폴리오	 10월 01일 (화)	3.5
포트폴리오 프로젝트	포트폴리오	 10월 05일 (토)	7.0
포트폴리오 프로젝트	포트폴리오	 10월 08일 (화)	3.5
포트폴리오 프로젝트	프로젝트 발표회	 10월 10일 (목)	3.5`;

const mon = '05월';
const results = [];
let chasi = 0;
for (const line of data.split('\n')) {
  const [title, subtitle, dt, tm] = line.split('\t');
  if (!dt.trim().startsWith(mon)) continue;
  const dts = `2024-${dt
    .trim()
    .replace('월', '-')
    .replace(/[^\d-]/g, '')} ${getTimeRange(tm)}`;
  results.push([`${++chasi}차시`, dts, tm, title, subtitle].join('\t'));
}

console.log(results.join('\n'));

function getTimeRange(tm) {
  if (Number(tm) === 7) {
    return '10:00~18:00';
  }

  if (+tm === 4.5) return '18:00~22:30';
  if (+tm === 3.5) return '19:00~22:30';

  return 'xxxxxxxx';
}
