const quotes = [
    {
        quote : "힘 없는 정의는 무능이고, 정의 없는 힘은 폭력이다.",
        author : "최배달",
    },
    {
        quote : "진정 위대한 모든 생각은 걷기로부터 나온다.",
        author : "프레드리히 니체",
    },
    {
        quote : "성공은 열심히 노력하며 기다리는 사람에게 찾아온다.",
        author : "토마스 A. 에디슨",
    },
    {
        quote : "위험은 자신이 무엇을 하는지 모르는데서 온다.",
        author : "워렌 버핏",
    },
    {
        quote : "아무런 위험을 감수하지 않는다면 더 큰 위험을 감수하게 될 것이다.",
        author : "에리카 종",
    },
    {
        quote : "내가 있는 곳이 낙원이라.",
        author : "볼테르",
    },
    {
        quote : "한 인간의 가치는 그가 무엇을 받을 수 있느냐가 아니라 무엇을 주느냐로 판단된다.",
        author : "알버트 아인슈타인",
    },
    {
        quote : "절대로 고개를 떨구지 말라. 고개를 치켜들고 세상을 똑바로 바라보라.",
        author : "헬렌켈러",
    },
    {
        quote : "거기 있는 것을 연주하지 말고 거기 없는 것을 연주하라.",
        author : "마일즈 데이비스",
    },
    {
        quote : "작은 잘못을 미리 깨닫고 고칠 수 있는 사람은 결코 망하지 않는다.",
        author : "노자",
    },                    
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;