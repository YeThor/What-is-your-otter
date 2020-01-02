import SUDAL from "./sudal";

const quizResult = {
  "1": {
    quiz: "나는 요즘 ...",
    answer: [
      {
        msg: "일상에서 당장 탈출하고 싶다.",
        isLast: false
      },
      {
        msg: "그럭저럭 잘 지낸다.",
        isLast: false
      }
    ]
  },
  "11": {
    quiz: "나는 ...",
    answer: [
      {
        msg: "내 손으로 직접 탈출하겠다.",
        isLast: false
      },
      {
        msg: "잠시 쉬면 될 것 같다.",
        isLast: false
      }
    ]
  },
  "12": {
    quiz: "나는 사실 ...",
    answer: [
      {
        msg: "심상치 않은 집중력의 소유자.",
        isLast: false
      },
      {
        msg: "딴짓 장인",
        isLast: false
      }
    ]
  },
  "111": {
    quiz: "나는 ...",
    answer: [
      {
        msg: "먹고 마시면 된다.",
        isLast: false
      },
      {
        msg: "뭔가 다른 걸 해야겠다.",
        isLast: false
      }
    ]
  },
  "112": {
    quiz: "나는 ...",
    answer: [
      {
        msg: "어딘가로 훌쩍 떠난다.",
        isLast: false
      },
      {
        msg: "어디를 가기는 또 귀찮다.",
        isLast: false
      }
    ]
  },
  "121": {
    quiz: "내 집중력은 ...",
    answer: [
      {
        msg: "선천적으로 타고난 재능이다.",
        isLast: false
      },
      {
        msg: "고통을 통해 단련한 능력이다.",
        isLast: false
      }
    ]
  },
  "122": {
    quiz: "쉬는 날에는 ...",
    answer: [
      {
        msg: "침대에서 나가기 싫다.",
        isLast: false
      },
      {
        msg: "나가서 안 놀면 억울하다.",
        isLast: false
      }
    ]
  },
  "1111": {
    quiz: "아무래도 ...",
    answer: [
      {
        msg: "맛있는 음식을 먹어줘야지",
        isLast: false
      },
      { msg: "술을 마셔줘야지.", isLast: true, result: SUDAL.MANCHI }
    ]
  },
  "1112": {
    quiz: "무언가를 ...",
    answer: [
      {
        msg: "지르고 싶다.",
        isLast: false
      },
      { msg: "찌르고 싶다.", isLast: true, result: SUDAL.KILLER }
    ]
  },
  "1121": {
    quiz: "휴가를 떠난다면 ...",
    answer: [
      {
        msg: "계획적으로 쉴 것이다.",
        isLast: true,
        result: SUDAL.HUGA
      },
      { msg: "아 몰라 그냥 쉰다.", isLast: true, result: SUDAL.SPA }
    ]
  },
  "1122": {
    quiz: "나는 ...",
    answer: [
      {
        msg: "도심 속 여유로운 카페가 좋다.",
        isLast: true,
        result: SUDAL.HEALING
      },
      { msg: "한적한 자연 그 자체가 좋다.", isLast: false }
    ]
  },
  "1211": {
    quiz: "나는 시련이 닥쳐도 ...",
    answer: [
      {
        msg: "힘을 내서 극복한다.",
        isLast: false
      },
      { msg: "흥이 넘쳐서 괜찮다.", isLast: true, result: SUDAL.DUMCHIT }
    ]
  },
  "1212": {
    quiz: "나는 평상시에 ...",
    answer: [
      {
        msg: "내 자신을 단련한다.",
        isLast: false
      },
      { msg: "내 통장을 단련한다.", isLast: true, result: SUDAL.JAETECH }
    ]
  },
  "1221": {
    quiz: "침대 위에서 ...",
    answer: [
      {
        msg: "재미있는 동영상이나 본다.",
        isLast: false
      },
      { msg: "뭐 보는 것도 지친다.", isLast: true, result: SUDAL.ANGYUNG }
    ]
  },
  "1222": {
    quiz: "나는 평소에 ...",
    answer: [
      {
        msg: "사진을 많이 찍는다.",
        isLast: true,
        result: SUDAL.INSTA
      },
      { msg: "코인 노래방을 자주 가곤 한다.", isLast: false }
    ]
  },
  "11111": {
    quiz: "나는 음식을 ...",
    answer: [
      {
        msg: "만들 줄 안다.",
        isLast: true,
        result: SUDAL.CHEF
      },
      { msg: "먹을 줄만 안다.", isLast: true, result: SUDAL.MIGAK }
    ]
  },
  "11121": {
    quiz: "이번에 새로 지른 물건을 ...",
    answer: [
      {
        msg: "친구들에게 자랑하는 편이다.",
        isLast: true,
        result: SUDAL.HUSAE
      },
      { msg: "혼자 바라만 봐도 좋다.", isLast: true, result: SUDAL.JIRUM }
    ]
  },
  "11222": {
    quiz: "나는 자연 속에서 가끔 ...",
    answer: [
      {
        msg: "깨달음을 얻는다.",
        isLast: true,
        result: SUDAL.HAE
      },
      { msg: "즐거움을 얻는다.", isLast: true, result: SUDAL.UBI }
    ]
  },
  "12111": {
    quiz: "나는 슬럼프가 오면 ...",
    answer: [
      {
        msg: "차분하게 평정심을 유지한다.",
        isLast: true,
        result: SUDAL.SUNGSIL
      },
      { msg: "투지가 불타 오른다.", isLast: true, result: SUDAL.GUNSUNG }
    ]
  },
  "12121": {
    quiz: "내 생각에는 ...",
    answer: [
      {
        msg: "건강한 육체에 건강한 정신이 깃든다.",
        isLast: true,
        result: SUDAL.UNDONG
      },
      { msg: "몸은 정신이 믿는대로 간다.", isLast: true, result: SUDAL.GOONGYE }
    ]
  },
  "12211": {
    quiz: "나는 ...",
    answer: [
      {
        msg: "넷플릭스로 미드 챙겨 봐야지.",
        isLast: true,
        result: SUDAL.BOLGER
      },
      {
        msg: "유튜브로 삘 꽂히는 거 봐야지.",
        isLast: true,
        result: SUDAL.DUTUCK
      }
    ]
  },
  "12222": {
    quiz: "노래하면 당연히 ...",
    answer: [
      {
        msg: "힙합!",
        isLast: true,
        result: SUDAL.SUWAG
      },
      { msg: "발라드~", isLast: true, result: SUDAL.MINSU }
    ]
  }
};

export default quizResult;
