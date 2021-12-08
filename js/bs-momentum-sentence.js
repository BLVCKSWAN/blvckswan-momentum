const sentence = document.querySelector(".sentence");
const source = document.querySelector(".source");

const sentences = [
  {
    sentence: "하나의 판타지는 백만개의현실을 완전히 바꿀 수 있다.",
    source: "메타버스",
  },
  {
    sentence: "내일이 당연히 오늘과 같을 것이라고 생각하지 마라.",
    source: "파이프라인",
  },
  {
    sentence: "내가 원하는 곳에 있어야 내가 원하는 방식으로 돈을 벌 수 있다.",
    source: "타이탄의 도구들",
  },
  {
    sentence: "평범한 가격을 치르면 평범한 것밖에 얻지 못한다.",
    source: "타이탄의 도구들",
  },
  {
    sentence:
      "길을 만드는 사람만이 결국 그 길이 나아가는 방향을 통제할 수 있다.",
    source: "타이탄의 도구들",
  },
  {
    sentence:
      "성공은 초안과는 전혀 다른 버전으로 탄생하지만, 초안은 반드시 있어야 한다.",
    source: "타이탄의 도구들",
  },
  {
    sentence: "그만두는 것은 포기가 아니라 다음으로 넘어간다는 뜻이다.",
    source: "타이탄의 도구들",
  },
  {
    sentence: "말할 수 없는 것에 관해서 우리는 침묵해야 한다.",
    source: "비트겐슈타인",
  },
  {
    sentence: "더 좋기 보다는 최초가 되는 편이 낫다.",
    source: "마케팅 불변의 법칙",
  },
  {
    sentence: "사람들은 '무엇이 새로운가?'에 관심을 갖는다.",
    source: "마케팅 불변의 법칙",
  },
  {
    sentence: "시장에서 최초가 되기 보다는 기억 속에서 최초가 되는 편이 낫다.",
    source: "마케팅 불변의 법칙",
  },
  {
    sentence: "마케팅은 제품의 싸움이 아니라 인식의 싸움이다.",
    source: "마케팅 불변의 법칙",
  },
  {
    sentence: "'모든 것'을 좇으려다가는 결코 어느 '하나'의 대표가 될 수 없다.",
    source: "마케팅 불변의 법칙",
  },
  {
    sentence: "무언가를 얻기 위해서는 무언가를 포기해야 한다.",
    source: "마케팅 불변의 법칙",
  },
  {
    sentence: "어떤 상황에서든 하나의 단일 행동만이 실제적인 결과를 창출한다.",
    source: "마케팅 불변의 법칙",
  },
  {
    sentence: "경쟁자의 계획을 예측하지 못하면, 미래를 예측할 수 없다.",
    source: "마케팅 불변의 법칙",
  },
  {
    sentence:
      "변화는 쉽지 않다. 그러나 예측 불가능한 미래를 다룰 수 있는 유일한 길이다.",
    source: "마케팅 불변의 법칙",
  },
  {
    sentence: "실패는 예상되고 또 받아들여져야 한다.",
    source: "마케팅 불변의 법칙",
  },
  {
    sentence:
      "진정한 개혁은 한밤중에, 아무런 사전 예고 없이, 살금살금 당신 곁으로 다가온다.",
    source: "마케팅 불변의 법칙",
  },
  {
    sentence: "유행이 바다에 이는 파도라면 트렌드는 조류다.",
    source: "마케팅 불변의 법칙",
  },
  {
    sentence: "입지는 무의식의 과학이다.",
    source: "로케이션",
  },
  {
    sentence: "편히 쉴 수 있는 공간은 추가 주문을 부른다.",
    source: "로케이션",
  },
  {
    sentence: "돈은 속도를 사랑한다.",
    source: "부의 마스터키",
  },
  {
    sentence:
      "정보의 바다에 빠져 있으면서, 사람들은 여전히 현명한 지혜에 목말라 한다.",
    source: "부의 마스터키",
  },
  {
    sentence: "감정은 느끼는 것이 아니다. 당신이 감정을 만드는 것이다.",
    source: "부의 마스터키",
  },
  {
    sentence:
      "문제가 없으면, 마음이 움직이지 않는다. 마음이 움직이지 않는다면, 구매도 없다.",
    source: "부의 마스터키",
  },
  {
    sentence:
      "두려움들은 대체 어디에서 오는가? 한 단어로 대답 하자면, '부족함'이다.",
    source: "부의 마스터키",
  },
  {
    sentence:
      "사람들은 0.25인치 드릴을 원하는게 아니라 0.25인치 구멍을 원한다.",
    source: "마케팅이다",
  },
  {
    sentence:
      "당신이 세상을 보는 방식은 당신이 섬기고자 하는 사람들의 세계관만큼 중요하지 않다.",
    source: "마케팅이다",
  },
  {
    sentence: "항상 궁금해하고, 실험하고, 사람들을 모두 다르게 대하라.",
    source: "마케팅이다",
  },
  {
    sentence: "말은 금세 잊혀지지만 행동은 오래 기억된다.",
    source: "마케팅이다",
  },
  {
    sentence: "마케터의 기여는 보고자 하는, 보이고자 하는 의지에서 나온다.",
    source: "마케팅이다",
  },
  {
    sentence:
      "변화는 가끔 모터보트처럼 순식간에 나타나지만, 대개는 함대처럼 천천히 방향을 바꾼다.",
    source: "생각의 기쁨",
  },
  {
    sentence: "고기가 좋으면 소금을 덜 쳐라.",
    source: "생각의 기쁨",
  },
  {
    sentence: "화가는 종이 앞에서는 항상 혼자다.",
    source: "생각의 기쁨",
  },
  {
    sentence: "빈 틈에는 중력이 있다.",
    source: "생각의 기쁨",
  },
  {
    sentence: "단순함은 궁극의 정교함이다.",
    source: "생각의 기쁨",
  },
  {
    sentence: "관심을 가지면 보인다, 믿음을 가지면 보이지 않는다.",
    source: "생각의 기쁨",
  },
  {
    sentence: "지금의 내 모습은 과거 내 생각의 결과다.",
    source: "생각의 기쁨",
  },
  {
    sentence: "자발적으로 행동하지 못하는 무능력이 무력감의 뿌리이다.",
    source: "프리워커스",
  },
  {
    sentence:
      "가능한 빠른 시기에 너의 경력에서 자유와 의미라는 지렛대를 만들어라.",
    source: "프리워커스",
  },
  {
    sentence:
      "눈치보느라 무미건조하게 사느니 미움받더라도 뚜렷하게 사는 편이 낫다.",
    source: "프리워커스",
  },
  {
    sentence: "문장은 실제 대화와 달리 납득할 때까지 갈고 닦을 수 있다.",
    source: "마케터의 문장",
  },
  {
    sentence:
      "할 수 없는 것을 할 수 있다고 믿게 만드는게 마케팅의 기본 아닐까?",
    source: "마케터의 문장",
  },
  {
    sentence:
      "가장 빨리 결과를 내고 싶다면 가장 빨리 성장해야 한다. 목표가 없으면 성장 속도는 빨라지지 않는다.",
    source: "마케터의 문장",
  },
  {
    sentence: "마인드에 파고들기 위해서는 메시지를 날카롭게 갈아야 한다.",
    source: "포지셔닝",
  },
  {
    sentence:
      "사람들의 마인드에 들어가는 가장 쉬운 방법은 첫 번째가 되는 것이다.",
    source: "포지셔닝",
  },
  {
    sentence:
      "결코 사실을 인식과 싸우려 들지 말라. 인식이 언제나 이기기 마련이다.",
    source: "포지셔닝",
  },
  {
    sentence:
      "리더십이 차별화의 최대 요소다. 리더십이야말로 브랜드 성공의 담보물이다.",
    source: "포지셔닝",
  },
];

const randomSentences = sentences[Math.floor(Math.random() * sentences.length)];

sentence.innerText = randomSentences.sentence;
source.innerText = randomSentences.source;
