import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Mail,
  Menu,
} from "lucide-react";
import {
  BrowserRouter,
  Link,
  Route,
  Routes,
  useLocation,
  useParams,
} from "react-router";

const profile = {
  nameKo: "김재관",
  nameEn: "KIM JAE GWAN",
  role: "Backend / Full-stack Developer",
  email: "your-email@example.com",
  github: "https://github.com/kimjaegwan0218",
  resume: "#",
  intro: `✨ About Me
사용자 흐름이 자연스러운 서비스를 만드는 것을 중요하게 생각합니다.
단순 구현보다 왜 이 기술을 사용하는지, 어떤 효과를 기대할 수 있는지를 고민하며 개발합니다.
웹 서비스 개발, 데이터 처리, AI 연계 프로젝트를 직접 구현하며 실전 경험을 쌓고 있습니다.
프론트엔드와 백엔드를 함께 다루며 기능 구현부터 흐름 설계까지 연결하는 개발에 관심이 많습니다.`,
};

const skills = [
  {
    label: "Backend",
    href: "https://kjg-portpolio.vercel.app/projects/study-cafe",
    title: "Spring Boot / JPA",
    description:
      "예약, 웨이팅, 분석 요청처럼 실제 서비스의 핵심 흐름을 API와 서비스 계층으로 구현했습니다.",
  },
  {
    label: "Frontend",
    href: "https://kjg-portpolio.vercel.app/projects/waiting-service",
    title: "React / JavaScript",
    description:
      "사용자 입력 화면, 관리자 화면, API 연동 UI를 구성하며 서비스 흐름을 화면으로 연결했습니다.",
  },
  {
    label: "AI & Data",
    href: "https://kjg-portpolio.vercel.app/projects/car-predict",
    title: "Python / CatBoost",
    description:
      "중고차 데이터 전처리, 이상치 제거, 가격 예측 모델 학습 과정을 수행했습니다.",
  },
];

const strengthCards = [
  {
    tag: "Spring Boot",
    text: [
      "REST API 기반 기능 구현 경험이 있습니다.",
      "Controller, Service, Repository 계층을 나누어 비즈니스 흐름을 구성했습니다.",
      "예약/대기/분석 요청처럼 상태가 바뀌는 기능을 구현했습니다.",
    ],
  },
  {
    tag: "React",
    text: [
      "사용자 화면과 관리자 화면을 React로 구성했습니다.",
      "API 응답 데이터를 화면 상태로 연결했습니다.",
      "예약, 웨이팅, 분석 결과 조회 흐름을 UI로 구현했습니다.",
    ],
  },
  {
    tag: "Python / AI",
    text: [
      "Pandas 기반 데이터 전처리 경험이 있습니다.",
      "CatBoost 모델로 중고차 가격 예측 모델을 학습했습니다.",
      "FastAPI를 활용한 AI 서버 연동 구조를 설계했습니다.",
    ],
  },
  {
    tag: "Troubleshooting",
    text: [
      "예약 중복, 웨이팅 중복 등록 문제를 해결했습니다.",
      "데이터 이상치와 서버 연동 오류를 개선했습니다.",
      "문제 원인을 찾고 구조적으로 해결하는 과정을 경험했습니다.",
    ],
  },
];

const career = [
  {
    title: "StudyCafe Reservation",
    date: "Team Project",
    description: "스터디카페 좌석 예약, 결제 대기, 예약 내역 조회 흐름 구현",
  },
  {
    title: "Waiting Service",
    date: "Team Project",
    description: "식당 웨이팅 등록, 대기번호 발급, 관리자 호출/입장 처리 구현",
  },
  {
    title: "CarPredict",
    date: "Team Project",
    description: "중고차 데이터 전처리, 가격 예측 모델 학습, AI 서버 연동 구조 설계",
  },
];

const activities = [
  {
    title: "Portfolio",
    description: "프로젝트 기능, 기술 선택 이유, 실행 화면을 정리해 웹 포트폴리오로 구성했습니다.",
  },
  {
    title: "README",
    description: "GitHub 프로젝트별 README를 작성하며 기능과 구현 흐름을 문서화했습니다.",
  },
  {
    title: "AI Integration",
    description: "학습된 모델을 서비스에서 사용할 수 있도록 FastAPI와 Spring Boot 연동 구조를 설계했습니다.",
  },
  {
    title: "Troubleshooting",
    description: "예약 중복, 웨이팅 중복, 데이터 이상치, 서버 연동 오류를 해결했습니다.",
  },
];

const projects = [
  {
    slug: "study-cafe",
    title: "StudyCafe Reservation System",
    subtitle: "스터디카페 좌석 예약 서비스",
    period: "Team Project",
    color: "green",
    summary:
      "좌석 선택, 시간 예약, 결제 대기, 예약 내역 조회 흐름을 구현한 예약 플랫폼입니다.",
    description:
      "사용자가 날짜와 시간을 선택하고 사용 가능한 좌석을 예약할 수 있도록 구성했습니다. 예약 생성 이후 결제 대기 상태를 관리하고, 사용자는 마이페이지에서 예약 상태를 확인할 수 있습니다.",
    background:
      "스터디카페 예약 서비스는 사용자가 원하는 시간대의 좌석을 미리 확보하고, 관리자는 예약 현황을 쉽게 확인할 수 있어야 합니다. 단순 좌석 등록이 아니라 시간 구간, 좌석 유형, 결제 상태까지 함께 고려해야 했기 때문에 예약 흐름의 안정성이 중요했습니다.",
    role: [
      "좌석 예약 생성 및 결제 대기 상태 관리",
      "시간 구간 기반 좌석 사용 가능 여부 판단",
      "사용자 예약 내역 조회 및 상태 표시 기능 구현",
      "좌석 유형별 추가 금액과 이용 시간 기반 가격 계산 흐름 구성",
      "회원탈퇴를 soft delete 방식으로 처리하고 기존 커뮤니티 글은 탈퇴한 사용자로 표시되도록 구현",
      "팀원들이 구현한 기능 코드를 병합하고 충돌 및 연동 오류를 수정하여 전체 프로젝트 흐름 정리",
    ],
    features: [
      "날짜와 시간 기반 좌석 예약",
      "좌석 유형별 추가 요금 적용",
      "결제 대기 및 결제 완료 상태 관리",
      "사용자 예약 내역 조회",
      "관리자 예약 현황 확인 흐름",
    ],
    tech: ["Spring Boot", "JPA", "Thymeleaf", "JavaScript", "Tailwind CSS"],
    flow: [
      "사용자가 날짜, 시간, 이용 시간을 선택합니다.",
      "서버는 해당 시간 구간에 이미 예약된 좌석을 제외하고 사용 가능한 좌석을 반환합니다.",
      "사용자가 좌석을 선택하면 예약 정보와 결제 대기 정보가 생성됩니다.",
      "결제가 완료되면 예약과 결제 상태가 함께 갱신됩니다.",
    ],
    problems: [
      {
        title: "같은 시간대에 같은 좌석이 중복 예약될 수 있는 문제",
        solution:
          "예약 시작 시간과 종료 시간이 겹치는지 검사하고, 결제 대기 상태까지 고려하여 좌석 사용 가능 여부를 판단했습니다.",
      },
      {
        title: "구독 사용자의 요금 계산 흐름이 일반 사용자와 다른 문제",
        solution:
          "구독 활성 상태를 확인한 뒤 기본 요금을 0원으로 처리하고 좌석 추가 요금만 계산하는 방식으로 분기했습니다.",
      },
    ],
    github: "https://github.com/kimjaegwan0218/StudyCafe_Project",
    video: "/videos/studycafe.mp4",
    mainImage: "/images/studycafe-main.png",
  },
  {
    slug: "waiting-service",
    title: "Waiting Service",
    subtitle: "식당 웨이팅 관리 서비스",
    period: "Team Project",
    color: "blue",
    summary:
      "고객의 웨이팅 등록, 대기번호 발급, 관리자 호출 및 입장 처리를 관리하는 웹 서비스입니다.",
    description:
      "고객은 이름, 전화번호, 인원 수를 입력해 웨이팅을 등록하고, 관리자는 등록된 대기 목록을 호출, 입장, 취소 상태로 관리할 수 있습니다. 전광판 화면을 통해 호출된 고객을 확인할 수 있도록 구성했습니다.",
    background:
      "식당 웨이팅은 현장에서 중복 등록, 호출 누락, 대기 순서 혼동이 발생하기 쉽습니다. 이를 줄이기 위해 사용자 등록 화면, 관리자 처리 화면, 전광판 화면을 나누어 실제 매장 운영 흐름에 가깝게 설계했습니다.",
    role: [
      "날짜별 대기번호 발급 로직 구현",
      "전화번호와 상태 기반 중복 웨이팅 등록 방지",
      "React 기반 사용자/관리자/전광판 화면 구성",
      "관리자 호출, 입장, 취소, 노쇼 처리 흐름 구현",
    ],
    features: [
      "고객 웨이팅 등록",
      "날짜별 대기번호 자동 발급",
      "중복 웨이팅 등록 방지",
      "관리자 호출/입장/취소/노쇼 처리",
      "전광판 호출 목록 표시",
    ],
    tech: ["Spring Boot", "React", "REST API", "JavaScript", "CSS"],
    flow: [
      "고객이 이름, 전화번호, 인원 수를 입력해 웨이팅을 등록합니다.",
      "서버는 오늘 날짜 기준으로 대기번호를 발급합니다.",
      "관리자는 대기 목록에서 고객을 호출하거나 입장 처리합니다.",
      "전광판 화면은 호출된 고객 정보를 주기적으로 갱신해 보여줍니다.",
    ],
    problems: [
      {
        title: "같은 사용자가 여러 번 대기 등록할 수 있는 문제",
        solution:
          "방문 날짜, 전화번호, 대기 상태를 기준으로 기존 대기 정보를 확인한 뒤 중복 등록을 제한했습니다.",
      },
      {
        title: "관리자 화면과 전광판 화면의 상태 동기화 문제",
        solution:
          "전광판 화면에서 일정 주기로 호출 목록을 다시 조회하도록 구성해 최신 호출 상태를 반영했습니다.",
      },
    ],
    github: "https://github.com/kimjaegwan0218/WaitingService_Project",
    video: "/videos/waiting.mp4",
    mainImage: "/images/waiting-main.png",
  },
  {
    slug: "car-predict",
    title: "CarPredict",
    subtitle: "중고차 가격 예측 AI 서비스",
    period: "Team Project",
    color: "green",
    summary:
      "차종, 연식, 주행거리 데이터를 기반으로 중고차 예상 가격을 예측하는 AI 연동 서비스입니다.",
    description:
      "중고차 데이터를 수집하고 전처리한 뒤 CatBoost 기반 가격 예측 모델을 학습했습니다. 사용자가 차량 정보를 입력하면 AI 서버를 통해 예상 가격을 반환하는 구조를 목표로 설계했습니다.",
    background:
      "중고차 가격은 차종, 연식, 주행거리, 사고 및 수리 이력 등 다양한 요인의 영향을 받습니다. 이 프로젝트에서는 우선 차종, 연식, 주행거리 중심의 가격 예측 모델을 만들고, 이미지 기반 차종 분류 모델과 서비스 연동이 가능하도록 구조를 설계했습니다.",
    role: [
      "중고차 데이터 수집 및 전처리",
      "연식/모델 기준 이상치 제거 기준 설계",
      "CatBoost 기반 가격 예측 모델 학습",
      "FastAPI AI 서버와 Spring Boot 백엔드 연동 구조 설계",
    ],
    features: [
      "중고차 데이터 수집 및 정제",
      "차종, 연식, 주행거리 기반 가격 예측",
      "이상치 제거를 통한 학습 데이터 품질 개선",
      "AI 서버와 백엔드 연동 구조 설계",
      "분석 결과 저장 및 조회 구조 설계",
    ],
    tech: ["Python", "Pandas", "CatBoost", "FastAPI", "Spring Boot"],
    flow: [
      "중고차 데이터를 수집하고 필요한 컬럼을 정리합니다.",
      "차량 모델과 연식 구간을 기준으로 이상치를 제거합니다.",
      "CatBoost 모델을 학습해 가격 예측 성능을 확인합니다.",
      "학습된 모델을 FastAPI 서버에 올려 백엔드와 연동할 수 있는 구조를 구성합니다.",
    ],
    problems: [
      {
        title: "데이터에 비정상적으로 높은 가격과 주행거리 이상치가 포함된 문제",
        solution:
          "차량 모델과 연식 구간별 가격 분포를 기준으로 이상치를 제거하고 학습 데이터를 정제했습니다.",
      },
      {
        title: "AI 모델과 웹 서비스의 연결 구조가 필요한 문제",
        solution:
          "FastAPI를 추론 서버로 두고 Spring Boot 백엔드가 AI 서버에 요청하는 방식의 연동 구조를 설계했습니다.",
      },
    ],
    github: "https://github.com/kimjaegwan0218/CarPredict_Project",
    video: "/videos/jjicarproject.mp4",
    mainImage: "/images/carpredict-main.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

function GitHubIcon({ className = "h-5 w-5" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.88-2.78.62-3.37-1.22-3.37-1.22-.45-1.19-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.35 1.12 2.92.85.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.71 0 0 .84-.28 2.75 1.05A9.26 9.26 0 0 1 12 6.97c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.55 1.4.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.8 0 .27.18.59.69.49A10.06 10.06 0 0 0 22 12.26C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const target = document.querySelector(location.hash);
      if (target) {
        setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return null;
}

function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#f7f1e6]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="text-sm font-black tracking-[0.2em] text-black">
          KJG
        </Link>
        <nav className="hidden gap-7 text-xs font-black uppercase tracking-[0.15em] md:flex">
          <Link to="/#strength" className="hover:text-[#00b8c8]">Strength</Link>
          <Link to="/#career" className="hover:text-[#ff402f]">Career</Link>
          <Link to="/#activity" className="hover:text-[#ff402f]">Activity</Link>
          <Link to="/#projects" className="hover:text-[#00e683]">Projects</Link>
        </nav>
        <button className="md:hidden" aria-label="menu">
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
}

function StickerTitle({ children, color = "cyan", id }) {
  const style =
    color === "red"
      ? { textShadow: "3px 3px 0 #111, 6px 6px 0 #ff402f" }
      : color === "green"
      ? { textShadow: "3px 3px 0 #111, 6px 6px 0 #00e683" }
      : { textShadow: "3px 3px 0 #111, 6px 6px 0 #00c8d7" };

  return (
    <motion.h2
      id={id}
      style={style}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="scroll-mt-24 text-4xl font-black tracking-[-0.08em] text-white md:text-6xl"
    >
      {children}
    </motion.h2>
  );
}

function Label({ children, color = "cyan" }) {
  const colorClass = color === "red" ? "bg-[#ff402f]" : color === "blue" ? "bg-[#1f46ff]" : "bg-[#00c8d7]";
  return (
    <span className={`inline-block -rotate-6 rounded-sm ${colorClass} px-3 py-1 text-xs font-black uppercase text-black shadow-[3px_3px_0_#111]`}>
      {children}
    </span>
  );
}

function Hero() {
  return (
    <section className="bg-[#f7f1e6] px-5 pb-24 pt-40 md:pt-48">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl bg-[#eeeeee] px-6 py-10 text-center shadow-sm md:px-12 md:py-14"
        >
          <h1 className="text-4xl font-black tracking-[-0.06em] text-[#00a8b8] underline decoration-[#00a8b8] decoration-4 underline-offset-4 md:text-6xl">
            Backend
          </h1>

          <div className="mx-auto mt-10 flex h-28 w-28 items-center justify-center rounded-full border-4 border-[#00a8b8] bg-white text-5xl shadow-[6px_6px_0_#111] md:h-36 md:w-36 md:text-6xl">
            👨‍💻
          </div>

          <div className="mx-auto mt-10 max-w-2xl text-left">
            <p className="text-base leading-8 text-zinc-800 md:text-lg">
              <span className="font-black text-[#00a8b8]">👋 안녕하세요</span>
              <br />
              <span className="font-black text-zinc-950">
                꾸준한 구현과 개선으로 아이디어를 실제 동작하는 서비스로 만드는 개발자 {profile.nameKo}입니다.
              </span>
            </p>
            <p className="mt-5 whitespace-pre-line text-sm leading-8 text-zinc-700 md:text-base">
              {profile.intro}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-xs font-black uppercase tracking-[0.08em] text-white transition hover:-translate-y-1 hover:bg-[#00a8b8] hover:text-black"
              >
                <GitHubIcon className="h-4 w-4" /> GitHub
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-black px-5 py-3 text-xs font-black uppercase tracking-[0.08em] text-black transition hover:-translate-y-1 hover:bg-black hover:text-white"
              >
                <Mail className="h-4 w-4" /> Email
              </a>
            </div>
            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {skills.map((skill) => (
                <Link
                  key={skill.label}
                  to={skill.href}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-4 py-3 text-center text-xs font-black text-white transition hover:-translate-y-1 hover:bg-[#00a8b8] hover:text-black"
                >
                  {skill.label}
                  <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Strength() {
  return (
    <section className="bg-[#f7f1e6] px-5 py-20">
      <div className="mx-auto max-w-4xl">
        <StickerTitle id="strength">Strength.</StickerTitle>

        <div className="mt-12 grid gap-6">
          {strengthCards.map((card, index) => (
            <motion.article
              key={card.tag}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="relative rounded-xl border-2 border-[#00a8b8] bg-[#f7f1e6] px-5 pb-6 pt-8 shadow-sm md:px-8"
            >
              <div className="absolute -top-4 left-5">
                <Label>{card.tag}</Label>
              </div>
              <ul className="space-y-3 text-sm leading-7 text-zinc-700 md:text-base">
                {card.text.map((text) => (
                  <li key={text} className="flex gap-3">
                    <span className="mt-3 h-1.5 w-1.5 flex-none rounded-full bg-[#00a8b8]" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Career() {
  return (
    <section className="bg-[#f7f1e6] px-5 py-20">
      <div className="mx-auto max-w-4xl">
        <div className="flex justify-end">
          <StickerTitle id="career" color="red">Career.</StickerTitle>
        </div>
        <div className="relative mt-12 space-y-8 pr-4 text-right before:absolute before:right-0 before:top-0 before:h-full before:w-1 before:skew-y-[-20deg] before:bg-[#ff402f]">
          {career.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.45 }}
              className="pr-6"
            >
              <p className="text-xs font-black uppercase tracking-[0.15em] text-zinc-400">{item.date}</p>
              <h3 className="mt-1 text-lg font-black text-[#008a66] md:text-2xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Activity() {
  return (
    <section className="bg-[#f7f1e6] px-5 py-20">
      <div className="mx-auto max-w-4xl">
        <StickerTitle id="activity" color="red">Activity.</StickerTitle>
        <div className="relative mt-10 border-l-4 border-[#ff402f] pl-6">
          {activities.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.45 }}
              className="py-4"
            >
              <h3 className="text-xl font-black tracking-[-0.04em] text-zinc-950 md:text-3xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-700 md:text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }) {
  const isBlue = project.color === "blue";
  const border = isBlue ? "border-[#1f46ff]" : "border-[#00e683]";
  const accent = isBlue ? "bg-[#1f46ff]" : "bg-[#00e683]";
  const text = isBlue ? "text-[#1f46ff]" : "text-[#00e683]";

  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.04 }}
      className={`relative rounded-2xl border-2 ${border} bg-black p-5 text-white shadow-[8px_8px_0_rgba(255,255,255,0.12)]`}
    >
      <div className="absolute -top-4 left-5">
        <span className={`${accent} inline-block -rotate-6 rounded-full px-4 py-2 text-xs font-black text-black shadow-[3px_3px_0_#fff]`}>
          Project {String(index + 1).padStart(2, "0")}
        </span>
      </div>
      <div className="flex items-start justify-between gap-4 pt-3">
        <div>
          <p className="text-xs font-bold text-white/60">{project.period}</p>
          <h3 className={`mt-2 text-2xl font-black tracking-[-0.05em] ${text} md:text-4xl`}>
            {project.title}
          </h3>
        </div>
        <p className="text-xs font-black text-white/40">{String(index + 1).padStart(2, "0")}</p>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span key={tech} className="rounded-full bg-white px-3 py-1 text-[11px] font-black text-black">
            {tech}
          </span>
        ))}
      </div>
      <p className="mt-5 text-sm leading-7 text-white/80 md:text-base">{project.summary}</p>
      <ul className="mt-4 space-y-2 text-xs leading-6 text-white/70 md:text-sm">
        {project.role.slice(0, 3).map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
      <div className="mt-6 flex justify-end">
        <Link
          to={`/projects/${project.slug}`}
          className={`inline-flex h-11 w-11 items-center justify-center rounded-full border-2 ${border} ${text} transition hover:${accent} hover:text-black`}
          aria-label={`${project.title} 자세히 보기`}
        >
          <ArrowRight className="h-5 w-5" />
        </Link>
      </div>
    </motion.article>
  );
}

function Projects() {
  return (
    <section className="bg-black px-5 py-20" id="projects">
      <div className="mx-auto max-w-4xl">
        <StickerTitle color="green">Projects.</StickerTitle>
        <div className="mt-12 grid gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="bg-[#f7f1e6] px-5 py-20">
      <div className="mx-auto max-w-4xl rounded-xl bg-[#eeeeee] p-8 text-center">
        <h2 className="text-3xl font-black tracking-[-0.06em] text-zinc-950 md:text-5xl">Contact.</h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-zinc-700 md:text-base">
          프로젝트를 통해 사용자 흐름, 데이터 처리, API 연동, AI 모델 적용까지 경험했습니다. 더 나은 서비스를 만들기 위해 꾸준히 학습하고 개선하겠습니다.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-xs font-black uppercase text-white">
            <Mail className="h-4 w-4" /> Email
          </a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-black px-5 py-3 text-xs font-black uppercase text-black">
            <ExternalLink className="h-4 w-4" /> GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function HomePage() {
  return (
    <>
      <Hero />
      <Strength />
      <Career />
      <Activity />
      <Projects />
      <Contact />
    </>
  );
}

function DetailBlock({ title, children }) {
  return (
    <section className="border-t-4 border-black py-10">
      <h2 className="text-3xl font-black tracking-[-0.05em] md:text-5xl">{title}</h2>
      <div className="mt-6 text-zinc-700">{children}</div>
    </section>
  );
}

function ProjectDetailPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="min-h-screen bg-[#f7f1e6] px-5 pt-32">
        <div className="mx-auto max-w-4xl rounded-xl border-2 border-black p-8 text-center">
          <h1 className="text-3xl font-black">프로젝트를 찾을 수 없습니다.</h1>
          <Link to="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-xs font-black uppercase text-white">
            <ArrowLeft className="h-4 w-4" /> Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="bg-[#f7f1e6] px-5 pb-24 pt-28 text-black">
      <div className="mx-auto max-w-5xl">
        <Link to="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-zinc-600 hover:text-black">
          <ArrowLeft className="h-4 w-4" /> Back to main
        </Link>

        <section className="mt-10 rounded-2xl bg-black p-7 text-white md:p-10">
          <Label color={project.color === "blue" ? "blue" : "cyan"}>{project.subtitle}</Label>
          <h1 className="mt-8 text-5xl font-black leading-none tracking-[-0.08em] md:text-7xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">{project.description}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="rounded-full bg-white px-3 py-1 text-xs font-black text-black">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {project.mainImage && (
          <section className="mt-8 rounded-2xl border-2 border-black bg-[#eeeeee] p-3 shadow-[8px_8px_0_#111]">
            <img
              src={project.mainImage}
              alt={`${project.title} 메인 화면`}
              className="w-full rounded-xl border-2 border-black object-cover"
            />
          </section>
        )}

        <DetailBlock title="Overview.">
          <p className="text-lg leading-9">{project.background}</p>
        </DetailBlock>

        <div className="grid gap-8 md:grid-cols-2">
          <DetailBlock title="Role.">
            <ul className="space-y-4">
              {project.role.map((item) => (
                <li key={item} className="flex gap-3 leading-8">
                  <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-[#00a8b8]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </DetailBlock>

          <DetailBlock title="Features.">
            <ul className="grid gap-3">
              {project.features.map((item) => (
                <li key={item} className="rounded-xl border-2 border-[#00a8b8] px-4 py-3 text-sm font-bold">
                  {item}
                </li>
              ))}
            </ul>
          </DetailBlock>
        </div>

        <DetailBlock title="Flow.">
          <ol className="grid gap-4 md:grid-cols-4">
            {project.flow.map((item, index) => (
              <li key={item} className="rounded-xl border-2 border-black p-5">
                <p className="text-3xl font-black">{String(index + 1).padStart(2, "0")}</p>
                <p className="mt-4 text-sm leading-7">{item}</p>
              </li>
            ))}
          </ol>
        </DetailBlock>

        <DetailBlock title="Troubleshooting.">
          <div className="grid gap-5 md:grid-cols-2">
            {project.problems.map((item) => (
              <article key={item.title} className="rounded-2xl bg-black p-6 text-white">
                <h3 className="text-xl font-black tracking-[-0.04em]">{item.title}</h3>
                <p className="mt-4 text-sm leading-8 text-white/75">{item.solution}</p>
              </article>
            ))}
          </div>
        </DetailBlock>

        <section className="grid gap-8 border-t-4 border-black py-10 md:grid-cols-[0.65fr_0.35fr]">
          {project.video ? (
            <video
              src={project.video}
              controls
              muted
              playsInline
              preload="metadata"
              className="aspect-video w-full rounded-xl border-2 border-[#00a8b8] bg-black object-contain shadow-[6px_6px_0_#111]"
            />
          ) : (
            <div className="flex aspect-video items-center justify-center rounded-xl border-2 border-dashed border-[#00a8b8] bg-[#eeeeee] text-center text-zinc-500">
              실행 화면 이미지 또는 시연 영상을 넣을 영역입니다.
            </div>
          )}
          <div>
            <h2 className="text-3xl font-black tracking-[-0.05em] md:text-5xl">Code.</h2>
            <p className="mt-5 text-sm leading-8 text-zinc-700">
              상세 설명을 먼저 확인한 뒤 실제 코드 구조와 구현 내용을 GitHub에서 확인할 수 있습니다.
            </p>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-5 py-3 text-xs font-black uppercase text-white"
            >
              GitHub <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

function Footer() {
  return (
    <footer className="bg-black px-5 py-8 text-center text-[11px] font-black uppercase tracking-[0.16em] text-white/40">
      Designed & Developed By {profile.nameEn}
    </footer>
  );
}

function AppLayout() {
  return (
    <main className="min-h-screen bg-[#f7f1e6] font-sans text-black">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects/:slug" element={<ProjectDetailPage />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default function Portfolio() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <AppLayout />
    </BrowserRouter>
  );
}
