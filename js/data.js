/**
 * UI-UX & Motion Cheat Sheet Data
 * Extracted and structured directly from:
 * - Video 1: "바이브코더가 반드시 알아야 할 필수 용어 24가지" (UI/UX 용어 편, 11:29)
 * - Video 2: "바이브코더가 반드시 알아야 할 필수 용어 24가지 2탄" (모션 용어 편, 12:14)
 * Channel: 코드깎는노인
 */

const CHEAT_SHEET_DATA = {
  ui: {
    title: "바이브 코딩 UI 필수 용어 24",
    subtitle: "CHEAT SHEET",
    channel: "코드깎는노인",
    formula: {
      tag: "💡 AI 요청 공식",
      text: "[UI 용어] + [원하는 동작] + [적용 조건]",
      example: "설정은 '오른쪽 드로어'로 만들어 줘. 상단의 설정 버튼을 누르면 열리고, Esc 키를 누르거나 바깥 영역을 클릭하면 닫히게 해 줘."
    },
    sections: [
      {
        id: "layout",
        title: "레이아웃 7",
        enTitle: "LAYOUT",
        count: 7,
        items: [
          {
            id: "hero-section",
            title: "Hero Section",
            sub: "첫 화면의 대표 영역",
            tag: "Layout",
            desc: "웹사이트 접속 시 방문자가 가장 먼저 보게 되는 최상단 대형 비주얼 영역입니다. 서비스의 핵심 가치 제안과 강력한 콜 투 액션(CTA)을 담습니다.",
            prompt: "첫 화면에 '히어로 섹션'을 만들어 줘. 중앙에 주목도 높은 큰 메인 타이틀과 CTA 버튼을 배치하고, 오른쪽에는 제품의 미리보기 대시보드 그래픽을 넣어줘."
          },
          {
            id: "responsive-layout",
            title: "Responsive Layout",
            sub: "화면 폭에 맞춘 배치",
            tag: "Layout",
            desc: "PC 모니터, 태블릿, 모바일 스마트폰 등 접속 기기의 화면 너비(뷰포트)에 따라 요소의 크기와 그리드 배치가 유연하게 최적화되는 레이아웃입니다.",
            prompt: "데스크톱에서는 3열 그리드로 보여주고, 모바일 화면 폭(768px 미만)에서는 1열 세로 스택으로 자동 재배치되는 '반응형 레이아웃'으로 만들어 줘."
          },
          {
            id: "card-layout",
            title: "Card Layout",
            sub: "정보를 카드로 나누기",
            tag: "Layout",
            desc: "텍스트, 이미지, 버튼 등 연관된 정보 덩어리를 둥근 사각 모서리의 독립된 카드 박스로 모듈화하여 일관성 있게 나열하는 배치 방식입니다.",
            prompt: "콘텐츠 목록을 썸네일, 제목, 요약문, 태그가 독립적으로 담긴 '카드 레이아웃' 형태로 배치해 줘. 카드마다 부드러운 외곽선과 그림자를 넣어줘."
          },
          {
            id: "bento-grid",
            title: "Bento Grid",
            sub: "크기 다른 카드 격자",
            tag: "Layout",
            desc: "일본식 도시락(Bento) 반찬 칸처럼 다양한 크기(1x1, 2x1, 2x2)의 사각 모듈들을 정교하게 결합하여 중요도에 따라 직관적인 시각적 계층을 부여하는 최신 디자인 트렌드입니다.",
            prompt: "주요 핵심 기능은 2x2 크기로 크게 강조하고, 보조 기능들은 1x1과 2x1 크기로 빽빽하고 세련되게 채운 '벤토 그리드' 섹션을 만들어 줘."
          },
          {
            id: "sidebar-layout",
            title: "Sidebar Layout",
            sub: "옆에 고정된 메뉴",
            tag: "Layout",
            desc: "화면 좌측 또는 우측에 수직형 내비게이션 바를 고정해 두고, 우측 넓은 영역에 메인 워크스페이스나 대시보드 콘텐츠를 스크롤 가능하게 배치하는 구조입니다.",
            prompt: "왼쪽에 메뉴 아이콘과 텍스트가 있는 240px 너비의 고정 '사이드바 레이아웃'을 두고, 우측 콘텐츠 영역만 독립적으로 스크롤되도록 분리해 줘."
          },
          {
            id: "sticky-header",
            title: "Sticky Header",
            sub: "스크롤해도 남는 헤더",
            tag: "Layout",
            desc: "사용자가 페이지 아래쪽으로 길게 스크롤을 내려도 상단 내비게이션 바(헤더)가 화면 맨 위에 착 붙어서 항상 따라오는 고정 메뉴바입니다.",
            prompt: "사용자가 아래로 스크롤해도 상단 로고와 메뉴가 뷰포트 맨 위에 계속 고정되어 머무르는 '스티키 헤더'를 적용하고, 스크롤 시 약간의 배경 블러를 줘."
          },
          {
            id: "split-layout",
            title: "Split Layout",
            sub: "좌우 분할 배치",
            tag: "Layout",
            desc: "화면을 좌우 50:50(또는 비대칭)으로 이등분하여 한쪽에는 감각적인 비주얼 이미지나 인터랙션을, 반대쪽에는 로그인 폼이나 상세 소개글을 배치하는 레이아웃입니다.",
            prompt: "화면을 좌우 50:50으로 정확히 나누는 '스플릿 레이아웃'으로 만들어 줘. 왼쪽에는 그라데이션 브랜드 비주얼을 채우고, 오른쪽에는 로그인 및 회원가입 폼을 배치해 줘."
          }
        ]
      },
      {
        id: "component",
        title: "컴포넌트 9",
        enTitle: "COMPONENT",
        count: 9,
        items: [
          {
            id: "tabs",
            title: "Tabs",
            sub: "같은 자리 내용 전환",
            tag: "Component",
            desc: "한정된 동일한 화면 공간 내에서 상단 탭 버튼 클릭만으로 서로 다른 하위 콘텐츠 패널을 신속하게 전환하여 보여주는 컴포넌트입니다.",
            prompt: "'월간 요금제'와 '연간 요금제(20% 할인)' 정보를 '탭' 컴포넌트로 구성해 줘. 현재 활성화된 탭에는 하단 인디케이터 바를 부드럽게 이동시켜 줘."
          },
          {
            id: "accordion",
            title: "Accordion",
            sub: "펼치고 접는 목록",
            tag: "Component",
            desc: "악기 아코디언처럼 제목을 누르면 아래로 숨겨져 있던 본문 내용이 사르르 펼쳐지고, 다시 누르면 닫히는 수직 접이식 컴포넌트입니다. (FAQ 최적화)",
            prompt: "자주 묻는 질문(FAQ) 섹션을 '아코디언'으로 만들어 줘. 질문을 클릭하면 화살표 아이콘이 회전하며 답변이 펼쳐지고, 다른 항목 클릭 시 기존 항목은 닫히게 해 줘."
          },
          {
            id: "modal-dialog",
            title: "Modal / Dialog",
            sub: "화면 위 확인 창",
            tag: "Component",
            desc: "기존 페이지 화면 위에 반투명 어두운 백드롭(오버레이)을 덮고 중앙에 팝업창을 띄워, 사용자의 확인이나 입력을 집중적으로 유도하고 다른 상호작용을 차단합니다.",
            prompt: "삭제 버튼 클릭 시 화면 중앙에 '정말 삭제하시겠습니까?'를 묻는 '모달 다이얼로그'를 띄워 줘. 배경은 어둡게 블러 처리하고 취소/확인 버튼을 넣어줘."
          },
          {
            id: "drawer",
            title: "Drawer",
            sub: "옆에서 열리는 패널",
            tag: "Component",
            desc: "책상 서랍을 열듯이 화면 우측이나 좌측 가장자리에서 부드럽게 스윽 밀려 나오는 슬라이드 패널입니다. 모달에 비해 사용자의 현재 작업 맥락을 덜 방해합니다.",
            prompt: "상단 설정 버튼을 누르면 화면 오른쪽 가장자리에서 쓱 밀려 나오는 '드로어' 패널을 열어 줘. Esc 키나 바깥 어두운 배경을 누르면 닫히게 해 줘."
          },
          {
            id: "dropdown",
            title: "Dropdown",
            sub: "아래로 펼치는 목록",
            tag: "Component",
            desc: "버튼이나 트리거 요소를 클릭했을 때, 그 바로 아래쪽에 선택 가능한 옵션이나 하위 메뉴 리스트가 촤르륵 펼쳐져 내려오는 UI 부품입니다.",
            prompt: "우측 상단 프로필 사진을 누르면 아래로 내 프로필, 설정, 테마 변경, 로그아웃이 나열되는 '드롭다운 메뉴'가 깔끔하게 펼쳐지도록 해 줘."
          },
          {
            id: "tooltip",
            title: "Tooltip",
            sub: "작은 설명 말풍선",
            tag: "Component",
            desc: "화면 공간을 절약하기 위해 물음표(?)나 작은 아이콘에 마우스 커서를 올리거나 키보드 포커스가 닿았을 때만 잠깐 나타나는 부가 설명 말풍선입니다.",
            prompt: "CVV 입력란 옆의 물음표 아이콘에 마우스를 올리거나 포커스하면 위쪽에 '카드 뒷면 서명란 3자리 숫자'를 설명하는 '툴팁' 말풍선을 띄워 줘."
          },
          {
            id: "toast-snackbar",
            title: "Toast / Snackbar",
            sub: "잠깐 나타나는 알림",
            tag: "Component",
            desc: "토스터기에서 빵이 톡 튀어나오듯 화면 하단이나 상단 구석에 가볍게 나타났다, 별도의 닫기 조작 없이도 수 초 후 스스로 스르륵 사라지는 비침해성 피드백 알림입니다.",
            prompt: "복사 버튼을 누르면 화면 하단 중앙에 '✓ 클립보드에 복사되었습니다' '토스트' 메시지를 띄우고, 3초 동안 유지된 후 자동으로 부드럽게 사라지게 해 줘."
          },
          {
            id: "carousel",
            title: "Carousel",
            sub: "옆으로 넘기는 카드",
            tag: "Component",
            desc: "회전목마처럼 여러 장의 이미지, 배너, 고객 리뷰 카드가 좌우 화살표나 스와이프를 통해 연속으로 회전하며 전환되는 슬라이더 형태의 컴포넌트입니다.",
            prompt: "고객 추천 후기 5개를 좌우 화살표 버튼과 하단 도트 인디케이터로 한 장씩 넘겨볼 수 있는 반응형 '캐러셀' 슬라이더로 만들어 줘."
          },
          {
            id: "skeleton-loading",
            title: "Skeleton Loading",
            sub: "로딩 중 윤곽 먼저",
            tag: "Component",
            desc: "원형 스피너 대신 실제 화면의 레이아웃 윤곽을 본뜬 회색 블록과 은은한 반사광 웨이브 애니메이션을 미리 보여주어 로딩 체감 시간을 획기적으로 줄여주는 UI입니다.",
            prompt: "서버 데이터를 불러오는 동안 빈 화면 대신 실제 프로필과 카드 모양을 본뜬 은은한 펄스 광택의 '스켈레톤 로딩' UI를 먼저 보여줘."
          }
        ]
      },
      {
        id: "effect",
        title: "효과 8",
        enTitle: "EFFECT",
        count: 8,
        items: [
          {
            id: "hover-effect",
            title: "Hover Effect",
            sub: "마우스를 올리면 반응",
            tag: "Effect",
            desc: "사용자가 마우스 커서를 컴포넌트나 카드 위에 올려두었을 때, 크기 확대, 살짝 떠오름, 배경색 변경, 네온 테두리 발광 등으로 반응하는 시각 효과입니다.",
            prompt: "기능 카드에 마우스 커서를 올리면 카드가 Y축으로 -6px 부드럽게 떠오르고, 테두리에 은은한 보라색 글로우가 켜지는 '호버 이펙트'를 적용해 줘."
          },
          {
            id: "scroll-reveal",
            title: "Scroll Reveal",
            sub: "스크롤하며 등장",
            tag: "Effect",
            desc: "사용자가 화면을 아래로 스크롤하여 해당 콘텐츠가 브라우저 뷰포트 안에 진입하는 순간, 숨겨져 있던 요소가 아래에서 위로 사르르 나타나는 등장 효과입니다.",
            prompt: "사용자가 스크롤을 내려 소개 섹션이 화면에 들어오는 순간, 아래에서 위로 20px 올라오며 불투명도가 0에서 1로 차오르는 '스크롤 리빌' 효과를 줘."
          },
          {
            id: "stagger-animation",
            title: "Stagger Animation",
            sub: "시간차 순차 등장",
            tag: "Effect",
            desc: "여러 개의 요소(카드, 리스트 항목 등)가 동시에 튀어나오지 않고, 0.08~0.15초씩 미세한 시간차(딜레이)를 두고 도미노처럼 차례대로 착착착 등장하는 애니메이션입니다.",
            prompt: "가격 플랜 카드 3개가 동시에 뜨지 않고, 왼쪽부터 0.1초씩 시간차를 두고 순차적으로 촥촥 떠오르는 '스태거 애니메이션'을 적용해 줘."
          },
          {
            id: "smooth-transition",
            title: "Smooth Transition",
            sub: "부드러운 상태 전환",
            tag: "Effect",
            desc: "버튼 색상 변화, 다크모드 토글, 탭 이동 등 UI의 상태가 바뀔 때 순간적으로 뚝 끊기지 않고 0.2~0.4초 동안 매끄러운 곡선(cubic-bezier)으로 변화하는 효과입니다.",
            prompt: "다크모드 토글 스위치를 켤 때 배경색과 토글 썸의 위치가 뚝뚝 끊기지 않고 0.3초 동안 매끄럽게 변하는 '스무스 트랜지션'을 걸어 줘."
          },
          {
            id: "glassmorphism",
            title: "Glassmorphism",
            sub: "반투명 유리 스타일",
            tag: "Effect",
            desc: "반투명 유리창처럼 뒤쪽의 다채로운 그라데이션 배경이나 빛을 은은하게 블러(흐림) 처리하여 비치게 만드는 고급스럽고 깊이감 있는 비주얼 스타일입니다.",
            prompt: "카드 배경을 반투명(rgba 0.15) 처리하고 backdrop-filter: blur(12px) 효과를 주어, 뒷배경의 컬러풀한 빛이 유리처럼 은은하게 비치는 '글래스모피즘' 스타일을 입혀줘."
          },
          {
            id: "parallax-scrolling",
            title: "Parallax Scrolling",
            sub: "깊이감 있는 시차",
            tag: "Effect",
            desc: "스크롤할 때 배경의 그래픽 레이어와 전경의 텍스트 레이어의 이동 속도를 서로 다르게 설정하여, 2D 평면 화면에서 웅장한 공간적 깊이감과 입체감을 느끼게 합니다.",
            prompt: "스크롤을 내릴 때 배경의 별빛 그래픽은 0.3의 속도로 천천히 움직이고 전경의 타이틀 텍스트는 1.0의 정상 속도로 흘러가는 '패럴랙스 스크롤'을 구현해줘."
          },
          {
            id: "scroll-snap",
            title: "Scroll Snap",
            sub: "섹션 단위로 착 정렬",
            tag: "Effect",
            desc: "사용자가 스크롤을 중간에 어정쩡하게 멈추더라도, 마치 자석에 이끌리듯 가장 가까운 전체 화면 섹션 단위로 뷰포트가 딱 맞아떨어지며 안착하는 기능입니다.",
            prompt: "전체 화면으로 구성한 풀페이지 제품 소개 섹션들에 CSS '스크롤 스냅'을 적용해서, 스크롤을 멈추면 해당 섹션이 화면 중앙에 자석처럼 착 정렬되게 해 줘."
          },
          {
            id: "micro-interaction",
            title: "Micro-interaction",
            sub: "작은 반응 애니메이션",
            tag: "Effect",
            desc: "좋아요 하트 클릭 시 톡 튀어오르거나, 토글 스위치 조작, 저장 완료 시 체크 표시 등 사용자의 작은 행동에 즉각적인 피드백과 생명력을 불어넣는 미세 애니메이션입니다.",
            prompt: "저장 버튼을 누르면 로딩 인디케이터를 잠깐 거쳐 녹색 체크 아이콘으로 톡 튀어오르며 바뀌는 귀엽고 감성적인 '마이크로 인터랙션'을 만들어 줘."
          }
        ]
      }
    ]
  },

  motion: {
    title: "애니메이션 필수 용어 24",
    subtitle: "MOTION CHEAT SHEET",
    channel: "코드깎는노인",
    formula: {
      tag: "🎬 AI 요청 공식",
      text: "[효과 이름] + [속도 및 시간(Duration/Delay)] + [시작 조건(Trigger)]",
      example: "히어로 제목에 'Split Text'를 적용해 줘. 글자마다 0.05초 간격, 0.6초 동안 아래에서 위로 Fade In, '페이지가 열리면 시작'."
    },
    sections: [
      {
        id: "basics",
        title: "기본 1–8",
        enTitle: "BASICS",
        count: 8,
        items: [
          {
            num: "01",
            id: "fade",
            title: "Fade",
            sub: "스르륵",
            tag: "Basics",
            desc: "요소의 투명도(opacity)를 조절하여 마법처럼 서서히 나타나거나(Fade In) 조용히 시야에서 사라지는(Fade Out) 가장 기본적이고 우아한 움직임입니다.",
            prompt: "모달 알림창이 열릴 때는 0.3초 동안 스르륵 나타나는 'Fade In'을, 닫힐 때는 0.2초 동안 서서히 사라지는 'Fade Out'을 적용해 줘."
          },
          {
            num: "02",
            id: "slide",
            title: "Slide",
            sub: "슈욱",
            tag: "Basics",
            desc: "상·하·좌·우 화면의 가장자리 바깥에서 미끄러지듯 위치(translate)를 이동하며 프레임 안으로 매끄럽게 등장하는 움직임입니다.",
            prompt: "모바일 햄버거 메뉴를 탭하면 화면 오른쪽 밖에서 안쪽으로 0.35초 동안 슈욱 밀려 들어오는 'Slide' 애니메이션을 넣어줘."
          },
          {
            num: "03",
            id: "scale",
            title: "Scale",
            sub: "뿅",
            tag: "Basics",
            desc: "요소의 크기 배율을 0에서 1로 키우거나 작게 줄이며 톡 튀어나오는 효과입니다. 장바구니 뱃지, 중요 팝업, 알림 점 등을 강조할 때 발군입니다.",
            prompt: "장바구니 담기 버튼을 누르면 카트 아이콘 우상단 수량 배지가 0에서 1.2로 커졌다가 1로 톡 안착하는 'Scale Pop' 효과를 줘."
          },
          {
            num: "04",
            id: "easing",
            title: "Easing",
            sub: "사뿐",
            tag: "Basics",
            desc: "움직임의 가속도와 감속도를 조절하는 속도 곡선입니다. 기계적인 일정한 속도(Linear)를 벗어나 처음엔 빠르고 끝은 사뿐하게 멈추는 생동감을 줍니다.",
            prompt: "등장 애니메이션의 속도 곡선에 딱딱한 선형 대신, 시작은 시원하고 끝은 사뿐하게 감속되는 'ease-out(또는 cubic-bezier)' 이징을 적용해 줘."
          },
          {
            num: "05",
            id: "spring",
            title: "Spring",
            sub: "띠용",
            tag: "Basics",
            desc: "물리 엔진처럼 목표 지점을 살짝 지나쳐 튀어나갔다가 용수철의 탄성으로 가볍게 출렁이며 제자리로 되돌아오는 유기적인 물리 기반 모션입니다.",
            prompt: "카드가 화면에 들어올 때 목표 위치를 살짝 15% 정도 지나쳤다가 탄성 있게 제자리로 출렁이는 'Spring' 물리 모션(stiffness: 300, damping: 20)을 줘."
          },
          {
            num: "06",
            id: "bounce",
            title: "Bounce",
            sub: "통통",
            tag: "Basics",
            desc: "탱탱볼이 바닥에 부딪히며 통통 튀어오르듯 중력과 반발력을 시뮬레이션하여 몇 번 튀기다가 서서히 멈추는 경쾌한 모션 효과입니다.",
            prompt: "결제 완료 성공 체크 아이콘이 상공에서 툭 떨어지며 바닥에 2~3회 경쾌하게 통통 튕긴 후 멈추는 'Bounce' 효과를 넣어줘."
          },
          {
            num: "07",
            id: "duration-delay",
            title: "Duration·Delay",
            sub: "휙 / 느릿",
            tag: "Basics",
            desc: "모션의 총 재생 지속 시간(Duration)과 모션이 출발하기 전 대기하는 시간(Delay)을 제어하여 요소 간의 속도 대비와 타이밍 리듬을 만듭니다.",
            prompt: "헤더 타이틀은 Duration 0.4초로 휙 나타나고, 서브 설명문은 0.2초 Delay 후에 0.6초 Duration으로 느릿하고 우아하게 나타나도록 설정해줘."
          },
          {
            num: "08",
            id: "loop",
            title: "Loop",
            sub: "둥실둥실",
            tag: "Basics",
            desc: "사용자가 조작하지 않아도 일정한 주기(무한 반복)로 부드럽게 오르내리거나 회전하며 살아 숨 쉬는 듯한 분위기를 연출하는 플로팅 모션입니다.",
            prompt: "히어로 영역의 3D 오브젝트 카드가 상하로 10px씩 3초 주기로 끝없이 부드럽게 왕복하는 둥실둥실 'Floating Loop' 애니메이션을 걸어 줘."
          }
        ]
      },
      {
        id: "text-shapes",
        title: "글자와 그림 9–16",
        enTitle: "TEXT · SHAPES",
        count: 8,
        items: [
          {
            num: "09",
            id: "typewriter",
            title: "Typewriter",
            sub: "타닥타닥",
            tag: "Text & Shapes",
            desc: "타자기를 치듯 커서가 깜빡거리며 글자가 한 글자씩 실시간으로 작성되는 타이핑 모션입니다. 터미널 감성이나 실시간 대화 분위기를 극대화합니다.",
            prompt: "메인 슬로건 문장이 타자기처럼 글자마다 0.08초 간격으로 타닥타닥 타이핑되고, 문장 끝에는 깜빡이는 커서(|)가 유지되는 'Typewriter'를 구현해줘."
          },
          {
            num: "10",
            id: "text-scramble",
            title: "Text Scramble",
            sub: "촤르륵",
            tag: "Text & Shapes",
            desc: "해커 매트릭스 화면처럼 무작위 특수문자들이 빠르게 회전하며 섞이다가 찰나의 순간 원래 단어로 딱 디코딩되어 맞춰지는 미래지향적 텍스트 효과입니다.",
            prompt: "핵심 키워드 '빈틈없는 보안'에 마우스를 올리면 특수문자들이 1초 동안 촤르륵 섞이다가 원래 단어로 정밀하게 맞춰지는 'Text Scramble'을 넣어줘."
          },
          {
            num: "11",
            id: "split-text",
            title: "Split Text",
            sub: "차르르",
            tag: "Text & Shapes",
            desc: "한 문장의 글자나 단어를 개별 요소로 정교하게 쪼갠 뒤, 글자마다 미세한 시간차를 두고 아래에서 위로 차르르 솟구치며 조립되는 타이포그래피 모션입니다.",
            prompt: "히어로 대제목을 글자 단위로 쪼개어(Split Text), 글자마다 0.04초 간격으로 아래에서 위로 마스크를 뚫고 차르르 Fade In 되며 올라오게 해 줘."
          },
          {
            num: "12",
            id: "count-up",
            title: "Count-up",
            sub: "촤라락",
            tag: "Text & Shapes",
            desc: "정적인 통계 숫자가 0부터 목표 수치까지 속도감 있게 카운팅되며 올라가는 다이내믹 숫자 애니메이션입니다. 신뢰도와 임팩트를 높입니다.",
            prompt: "누적 사용자 수 '11,755+' 통계가 화면에 스크롤되어 들어올 때 0부터 목표 값까지 2초 동안 부드러운 가감속으로 촤라락 올라가는 'Count-up'을 구현해줘."
          },
          {
            num: "13",
            id: "line-drawing",
            title: "Line Drawing",
            sub: "쓱쓱",
            tag: "Text & Shapes",
            desc: "SVG 벡터 패스의 stroke-dashoffset 기법을 사용하여, 보이지 않는 투명 펜이 궤적을 따라 차례대로 선을 그리듯 도형이나 그래프를 완성하는 효과입니다.",
            prompt: "성장 지표 꺾은선 SVG 그래프가 화면에 보일 때 펜으로 쓱쓱 그리듯이 왼쪽에서 오른쪽으로 1.5초 동안 완성되는 'Line Drawing'을 적용해 줘."
          },
          {
            num: "14",
            id: "morphing",
            title: "Morphing",
            sub: "스르르",
            tag: "Text & Shapes",
            desc: "하나의 벡터 모양이나 아이콘(예: 세 줄 햄버거 메뉴)의 정점들이 스르륵 유기적으로 재배치되며 완전히 다른 모양(예: X 닫기 버튼)으로 부드럽게 변형되는 효과입니다.",
            prompt: "햄버거 메뉴(3줄)를 클릭하면 세 선이 회전하고 교차하면서 닫기 X 아이콘으로 스르르 변형되는 SVG 'Morphing' 애니메이션을 만들어 줘."
          },
          {
            num: "15",
            id: "marquee",
            title: "Marquee",
            sub: "줄줄",
            tag: "Text & Shapes",
            desc: "증권사 주가 전광판처럼 여러 개의 브랜드 로고나 텍스트가 수평 방향으로 끊김 없이 무한 롤링되는 티커 모션입니다. 마우스 오버 시 정지 기능을 곁들입니다.",
            prompt: "협력사 파트너 로고들이 우측에서 좌측으로 끊김 없이 무한 루프로 줄줄 흘러가고, 마우스를 올리면 일시정지되는 부드러운 'Marquee' 티커를 만들어 줘."
          },
          {
            num: "16",
            id: "motion-path",
            title: "Motion Path",
            sub: "슝",
            tag: "Text & Shapes",
            desc: "단순한 직선 이동 대신 곡선이나 포물선 등 지정된 자유 곡선 궤적(CSS offset-path / SVG)을 따라 비행선이나 오브젝트가 방향을 틀며 날아가는 고급 경로 모션입니다.",
            prompt: "장바구니 담기 클릭 시 상품 썸네일 아이콘이 포물선 호(Motion Path) 궤적을 그리며 솟구쳤다가 우측 상단 카트 안으로 슝 날아 들어가게 해 줘."
          }
        ]
      },
      {
        id: "screen-mouse",
        title: "화면과 마우스 17–24",
        enTitle: "SCREEN · MOUSE",
        count: 8,
        items: [
          {
            num: "17",
            id: "page-transition",
            title: "Page Transition",
            sub: "휘릭",
            tag: "Screen & Mouse",
            desc: "다른 페이지로 넘어갈 때 브라우저의 뚝뚝 끊기는 새로고침을 지우고, 화면 전체가 슬라이드되거나 컬러 오버레이가 스위핑하며 전환되는 모바일 앱 수준의 전환 모션입니다.",
            prompt: "메뉴 링크를 누르면 현재 화면이 왼쪽으로 슬라이드 아웃되고 새 페이지가 오른쪽에서 휘릭 미끄러져 들어오는 부드러운 'Page Transition'을 넣어줘."
          },
          {
            num: "18",
            id: "shared-element",
            title: "Shared Element",
            sub: "쭈욱",
            tag: "Screen & Mouse",
            desc: "목록에 있던 작은 썸네일 카드를 클릭했을 때, 그 작은 사진이 다음 상세 화면의 메인 헤더 사진으로 연속성 있게 쭈욱 확대되며 공간감을 이어주는 모션입니다.",
            prompt: "카드 썸네일을 클릭하면 상세 페이지로 넘어갈 때 해당 이미지가 상세 페이지 메인 비주얼 위치로 쭈욱 연속성 있게 커지는 'Shared Element Transition'을 적용해줘."
          },
          {
            num: "19",
            id: "pin-scrollytelling",
            title: "Pin·Scrollytelling",
            sub: "착착",
            tag: "Screen & Mouse",
            desc: "스크롤하는 동안 특정 비주얼(예: 3D 스마트폰)은 화면 중앙에 핀(Pin)으로 고정해 두고, 스크롤 진척도에 맞춰 주변의 설명 글과 기능 하이라이트가 착착 바뀌는 서사 기법입니다.",
            prompt: "스크롤하는 동안 메인 기기 목업 이미지는 뷰포트 정중앙에 고정(Pin)해 두고, 스크롤을 내릴 때마다 3단계의 기능 설명이 착착 페이드 인/아웃 교체되게 해줘."
          },
          {
            num: "20",
            id: "horizontal-scroll",
            title: "Horizontal Scroll",
            sub: "옆으로 스르륵",
            tag: "Screen & Mouse",
            desc: "마우스 휠을 평소처럼 세로로 굴려도, 특정 갤러리 섹션에 진입하면 화면이 가로 방향으로 전환되어 와이드한 가로 카드들이 옆으로 스르륵 흘러가는 인터랙션입니다.",
            prompt: "세로로 마우스 휠을 스크롤해도 해당 포트폴리오 섹션 구간에서는 카드들이 가로 방향으로 옆으로 스르륵 지나가는 '수평 스크롤(Horizontal Scroll)'을 구현해줘."
          },
          {
            num: "21",
            id: "magnetic-button",
            title: "Magnetic Button",
            sub: "착",
            tag: "Screen & Mouse",
            desc: "마우스 커서가 버튼 주변 50~80px 반경 안으로 다가가면, 마치 자석에 이끌리듯 버튼 본체가 커서 쪽으로 착 따라붙어 클릭 충동을 극대화하는 마이크로 인터랙션입니다.",
            prompt: "CTA '시작하기' 버튼 근처로 마우스 커서가 다가가면 자석에 끌리듯 버튼이 커서 위치를 따라 부드럽게 15px 정도 착 당겨지는 'Magnetic Button'을 구현해줘."
          },
          {
            num: "22",
            id: "custom-cursor",
            title: "Custom Cursor",
            sub: "졸졸",
            tag: "Screen & Mouse",
            desc: "OS의 뻔한 화살표 커서 대신, 웹사이트의 톤앤매너에 맞춘 반투명 원형 링이나 네온 점 커서가 마우스 포인터를 살짝 감속하며 쫀득하게 졸졸 따라다니는 효과입니다.",
            prompt: "기본 화살표 커서를 숨기고 마우스 좌표를 0.15초 감속으로 졸졸 따라다니는 반투명 원형 링 형태의 '커스텀 커서'를 만들고 링크 호버 시 2배 확대되게 해줘."
          },
          {
            num: "23",
            id: "3d-tilt",
            title: "3D Tilt",
            sub: "갸우뚱",
            tag: "Screen & Mouse",
            desc: "마우스가 카드 위를 지나갈 때 커서의 위치(X, Y)에 반응하여 카드가 실제 3차원 공간에서 갸우뚱 기울어지며, 실시간 반사광(글레어)이 함께 움직이는 홀로그램급 입체 효과입니다.",
            prompt: "가격 플랜 카드에 마우스 위치에 따라 최대 15도까지 입체적으로 갸우뚱 기울어지는 '3D Tilt' 효과를 넣고, 표면에 빛 반사광(glare)도 같이 움직이게 해줘."
          },
          {
            num: "24",
            id: "confetti",
            title: "Confetti",
            sub: "빵",
            tag: "Screen & Mouse",
            desc: "결제 완료, 회원가입, 미션 달성 등 고객을 진심으로 축하해야 하는 결정적 순간에 화면 가득 알록달록한 색종이 꽃가루가 빵 터져 흩날리는 감동적인 피날레 모션입니다.",
            prompt: "첫 결제 완료 시 화면 중앙 상단에서 화려한 오색 꽃가루가 빵 터지며 2.5초 동안 흩날리는 'Confetti' 축하 효과를 실행해 줘. (모션 감소 사용자 배려)"
          }
        ]
      }
    ]
  }
};

// Export to window for browser vanilla execution
if (typeof window !== 'undefined') {
  window.CHEAT_SHEET_DATA = CHEAT_SHEET_DATA;
}
