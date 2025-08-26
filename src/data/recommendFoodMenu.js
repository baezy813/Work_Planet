const breakfast = [
    {
        name: '토스트 & 계란',
        image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=150&h=150&fit=crop',
        price: 8000,
        category: '아침'
    },
    {
        name: '샌드위치 세트',
        image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=150&h=150&fit=crop',
        price: 12000,
        category: '아침'
    },
    {
        name: '시리얼 & 우유',
        image: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=150&h=150&fit=crop',
        price: 6000,
        category: '아침'
    },
    {
        name: '베이글 & 크림치즈',
        image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=150&h=150&fit=crop',
        price: 9000,
        category: '아침'
    },
    {
        name: '오믈렛',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop',
        price: 11000,
        category: '아침'
    },
    {
        name: '팬케이크',
        image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=150&h=150&fit=crop',
        price: 10000,
        category: '아침'
    },
    {
        name: '죽',
        image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=150&h=150&fit=crop',
        price: 7000,
        category: '아침'
    },
    {
        name: '프렌치토스트',
        image: 'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=150&h=150&fit=crop',
        price: 9500,
        category: '아침'
    },
    {
        name: '스무디',
        image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=150&h=150&fit=crop',
        price: 6500,
        category: '아침'
    },
    {
        name: '과일 & 요거트',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=150&h=150&fit=crop',
        price: 7500,
        category: '아침'
    }
];

const lunch = [
    {
        name: '김치찌개',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=150&h=150&fit=crop',
        price: 12000,
        category: '점심'
    },
    {
        name: '제육볶음',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop',
        price: 13000,
        category: '점심'
    },
    {
        name: '된장찌개',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=150&h=150&fit=crop',
        price: 11000,
        category: '점심'
    },
    {
        name: '비빔밥',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop',
        price: 14000,
        category: '점심'
    },
    {
        name: '칼국수',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop',
        price: 10000,
        category: '점심'
    },
    {
        name: '돈까스',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop',
        price: 15000,
        category: '점심'
    },
    {
        name: '라멘',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop',
        price: 13000,
        category: '점심'
    },
    {
        name: '카레',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop',
        price: 12000,
        category: '점심'
    },
    {
        name: '샌드위치',
        image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=150&h=150&fit=crop',
        price: 9000,
        category: '점심'
    },
    {
        name: '샐러드',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=150&h=150&fit=crop',
        price: 11000,
        category: '점심'
    }
];

const dinner = [
    {
        name: '삼겹살',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop',
        price: 25000,
        category: '저녁'
    },
    {
        name: '닭볶음탕',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop',
        price: 18000,
        category: '저녁'
    },
    {
        name: '갈비찜',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop',
        price: 22000,
        category: '저녁'
    },
    {
        name: '부대찌개',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=150&h=150&fit=crop',
        price: 16000,
        category: '저녁'
    },
    {
        name: '순두부찌개',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=150&h=150&fit=crop',
        price: 12000,
        category: '저녁'
    },
    {
        name: '닭갈비',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop',
        price: 20000,
        category: '저녁'
    },
    {
        name: '오징어볶음',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop',
        price: 17000,
        category: '저녁'
    },
    {
        name: '고등어구이',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop',
        price: 15000,
        category: '저녁'
    },
    {
        name: '감자탕',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=150&h=150&fit=crop',
        price: 19000,
        category: '저녁'
    },
    {
        name: '찜닭',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop',
        price: 21000,
        category: '저녁'
    }
];

const companyDinner = [
    {
        name: '삼겹살 세트',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop',
        price: 35000,
        category: '회식'
    },
    {
        name: '닭볶음탕 세트',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop',
        price: 28000,
        category: '회식'
    },
    {
        name: '갈비찜 세트',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop',
        price: 32000,
        category: '회식'
    },
    {
        name: '부대찌개 세트',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=150&h=150&fit=crop',
        price: 25000,
        category: '회식'
    },
    {
        name: '순두부찌개 세트',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=150&h=150&fit=crop',
        price: 22000,
        category: '회식'
    },
    {
        name: '닭갈비 세트',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop',
        price: 30000,
        category: '회식'
    },
    {
        name: '오징어볶음 세트',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop',
        price: 27000,
        category: '회식'
    },
    {
        name: '고등어구이 세트',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop',
        price: 25000,
        category: '회식'
    },
    {
        name: '감자탕 세트',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=150&h=150&fit=crop',
        price: 29000,
        category: '회식'
    },
    {
        name: '찜닭 세트',
        image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=150&h=150&fit=crop',
        price: 31000,
        category: '회식'
    }
];


const allMenus = {
    breakfast,
    lunch,
    dinner,
    companyDinner
};

export default allMenus;


