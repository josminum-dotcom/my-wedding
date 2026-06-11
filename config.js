/**
 * ============================================
 *  모바일 청첩장 설정 파일
 *  이 파일만 수정하면 청첩장이 완성됩니다.
 *
 *  이미지는 설정이 필요 없습니다.
 *  아래 폴더에 1.jpg, 2.jpg, ... 순서로 넣어주세요:
 *    images/hero/1.jpg       — 메인 사진 (1장)
 *    images/story/1.jpg ...  — 스토리 사진 (자동 감지)
 *    images/gallery/1.jpg ...— 갤러리 사진 (자동 감지)
 *    images/location/1.jpg   — 오시는 길 사진 (1장)
 *    images/og/1.jpg         — OG 공유 썸네일 (1장)
 * ============================================
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: true,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "만제",
    lastName: "조",
    fullName: "조만제",
    father: "조용대",
    mother: "박명옥",
    fatherDeceased: false, // 故인이면 true
    motherDeceased: false,
  },

  bride: {
    name: "지혜",
    lastName: "유",
    fullName: "유지혜",
    father: "유창엽",
    mother: "김승현",
    fatherDeceased: true,
    motherDeceased: false,
  },

  wedding: {
    date: "2026-07-18",        // YYYY-MM-DD
    time: "12:20",             // HH:MM (24시간)
    dayOfWeek: "토요일",
    venue: "CN천년부페웨딩홀 주안점",
    hall: "오펠리스홀 6층",
    address: "인천 미추홀구 길파로 6 (주안역 북광장)",
    tel: "032-872-6200",
    mapLinks: {
      kakao: "https://kko.to/YnWnroWmBE",
      naver: "https://naver.me/FJbdg2Al",
    },
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content:
      "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n삶의 여정 속에서 만난 소중한 인연,\n이제 평생을 함께 하려 합니다.\n\n귀한 걸음 하시어\n저희의 새 출발을 축복해 주세요.",
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content:
      "서로 다른 길을 걷던 두 사람이\n하나의 길을 함께 걷게 되었습니다.\n\n여러분을 소중한 자리에 초대합니다.",
  },

  // ── 오시는 길 ──

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "조만제", bank: "우리은행", number: "1002-258-202808" },
    ],
    bride: [
      { role: "신부", name: "유지혜", bank: "농협은행", number: "302-7931-3227-81" },
    ],
  },

  // ── 링크 공유 시 나타나는 문구 ──
  kakaoShare: {
    // Kakao Developers 앱키 (JavaScript 키)
    appKey: "a3a172d821ff5560e8970590d4e47a89",
    title: "조만제 ♥ 유지혜 결혼합니다",
    description: "2026년 7월 18일 토요일 오후 12시 20분, 주안 CN웨딩홀\n",
  },

  meta: {
    title: "조만제 ♥ 유지혜 결혼합니다",
    description: "2026년 7월 18일 토요일 오후 12시 20분, 주안 CN웨딩홀",
  },
};
