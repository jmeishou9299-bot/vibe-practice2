// 한문 선생님을 위한 생활 한자어 데이터베이스 (중1 수준 맞춤 10선)
const database = {
    "학교": {
        hanja: "學校",
        literal: "學 (배울 학) / 校 (집 교)",
        meaning: "학생들이 한곳에 모여서 선생님께 지식과 지혜를 '배우는 집'이라는 뜻이에요.",
        example: "우리는 매일 아침 즐거운 마음으로 학교에 등교합니다."
    },
    "학생": {
        hanja: "學生",
        literal: "學 (배울 학) / 生 (날 생)",
        meaning: "공부나 학문을 '배우는 것'을 본분으로 삼아 살아가는 '사람'을 뜻해요.",
        example: "중학교 1학년이 된 민우는 이제 스스로 공부하는 진짜 학생이 되었다."
    },
    "약속": {
        hanja: "約束",
        literal: "約 (묶을 약) / 束 (묶을 속)",
        meaning: "실이나 끈으로 단단히 묶듯, 다른 사람과 장래의 일을 서로 어기지 않기로 '단단히 동여매어 다짐함'을 뜻해요.",
        example: "친구와 주말에 영화를 보러 가기로 약속을 잡았다."
    },
    "공부": {
        hanja: "工夫",
        literal: "工 (장인 공) / 夫 (사내 부)",
        meaning: "원래는 장인이 기술을 익히듯 '몸과 힘을 들여 끈기 있게 노력함'을 뜻했으나, 오늘날에는 학문이나 기술을 배우고 익히는 일을 말해요.",
        example: "한자어의 속뜻을 알면 국어 어휘 공부가 훨씬 쉬워집니다."
    },
    "배려": {
        hanja: "配慮",
        literal: "配 (나눌 배) / 慮 (생각할 려)",
        meaning: "내 생각만 하는 것이 아니라, 내 마음의 일부를 '나누어' 타인의 처지를 깊이 '생각하고 보살펴 줌'을 의미해요.",
        example: "짝꿍을 위해 먼저 문을 열어주는 작은 배려가 교실을 따뜻하게 만듭니다."
    },
    "반성": {
        hanja: "反省",
        literal: "反 (돌이킬 반) / 省 (살필 성)",
        meaning: "지나간 자신의 행동이나 말을 거울을 보듯 '되돌아보고(反)', 잘못이 없었는지 '자세히 살핀다(省)'는 뜻이에요.",
        example: "일기를 쓰며 오늘 하루 친구에게 상처 준 말은 없었는지 반성했다."
    },
    "감사": {
        hanja: "感謝",
        literal: "感 (느낄 감) / 謝 (사례할 사)",
        meaning: "타인의 친절이나 도움을 마음 깊이 '느끼고(感)', 그것을 말이나 행동으로 고맙다고 '표현하여 갚는다(謝)'는 뜻이에요.",
        example: "맛있는 급식을 만들어 주시는 조리실 선생님들께 감사의 인사를 드렸다."
    },
    "행복": {
        hanja: "幸福",
        literal: "幸 (다행 행) / 福 (복 복)",
        meaning: "삶에서 나쁜 일 없이 '다행스럽고 평안함(幸)'과 정신적·물질적으로 풍요로운 '복(福)'이 가득하여 마음이 흐뭇한 상태를 말해요.",
        example: "가족들과 식탁에 둘러앉아 이야기를 나누는 시간이 나에게는 큰 행복이다."
    },
    "노력": {
        hanja: "努力",
        literal: "努 (힘쓸 노) / 力 (힘 력)",
        meaning: "어떤 목적을 이루기 위하여 자신의 온 마음과 '힘(力)'을 다해 끊임없이 '애쓰고 힘씀(努)'을 뜻해요.",
        example: "한문 시험을 잘 보기 위해 매일 한자 쓰기 노력을 기울였다."
    },
    "협동": {
        hanja: "協同",
        literal: "協 (합할 협) / 同 (한가지 동)",
        meaning: "여러 사람의 마음과 힘을 하나로 '합하여(協)' 목적을 위해 '함께(同)' 행동함을 뜻해요. (協 자에는 힘 력(力) 자가 세 개나 모여 있어요!)",
        example: "체육대회 줄다리기 시합에서 우리 반은 모두가 협동하여 우승을 차지했다."
    }
};

// 검색 기능 함수
function searchWord() {
    const inputField = document.getElementById('search-input');
    const resultSection = document.getElementById('result-section');
    const errorBox = document.getElementById('error-message');
    
    // 입력값 앞뒤 공백 제거
    const query = inputField.value.trim();

    if (query === "") {
        alert("한자어를 입력해 주세요!");
        return;
    }

    if (database[query]) {
        // 단어를 찾았을 때 처리
        const data = database[query];
        
        document.getElementById('res-word').innerText = data.hanja;
        document.getElementById('res-reading').innerText = query;
        document.getElementById('res-literal').innerText = data.literal;
        document.getElementById('res-meaning').innerText = data.meaning;
        document.getElementById('res-example').innerText = data.example;
        
        // 화면 표시 제어
        resultSection.classList.remove('hidden');
        errorBox.classList.add('hidden');
    } else {
        // 단어가 없을 때 처리
        resultSection.classList.add('hidden');
        errorBox.classList.remove('hidden');
    }
}

// 추천 태그 클릭 시 자동 검색 기능
function quickSearch(word) {
    document.getElementById('search-input').value = word;
    searchWord();
}

// 엔터 키를 눌러도 검색이 되도록 설정
document.getElementById('search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        searchWord();
    }
});
