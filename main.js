function expect(actual) {
    return {
        toBe(expected) {
            if (actual !== expected) {
                throw new Error(`Очікував ${expected}, отримав ${actual}`);
            }
        },
    };
}

function test(name, fn) {
    try {
        fn();
        console.log(`✅ ${name}`);
    } catch (error) {
        console.log(`❌ ${name}\n   ${error.message}`);
    }
}

// Функція 1. getAgeCategory (age)
// Приймає вік і повертає категорію:

// Вік - Результат

// 0–12 - 'дитина'

// 13–17 - 'підліток'

// 18–64- 'дорослий'

// 65 і більше - 'пенсіонер'

// від'ємне число, не число, NaN - 'некоректний вік'

// Мінімум 7 тестів. Обов'язково перевір межі: 12 і 13, 17 і 18, 64 і 65. Саме на межах найчастіше помиляються з < і <=.

function getAgeCategory(age) {
    if (typeof age !== 'number' || isNaN(age) || age < 0) {
        return 'некоректний вік';
    }
    if (age <= 12) {
        return 'дитина';
    }
    if (age <= 17) {
        return 'підліток';
    }
    if (age <= 64) {
        return 'дорослий';
    }
    return 'пенсіонер';
}

test('getAgeCategory: 10 → дитина', () => {
    expect(getAgeCategory(10)).toBe('дитина');
});
test('getAgeCategory: 12 → дитина', () => {
    expect(getAgeCategory(12)).toBe('дитина');
});
test('getAgeCategory: 13 → підліток', () => {
    expect(getAgeCategory(13)).toBe('підліток');
});
test('getAgeCategory: 17 → підліток', () => {
    expect(getAgeCategory(17)).toBe('підліток');
});
test('getAgeCategory: 18 → дорослий', () => {
    expect(getAgeCategory(18)).toBe('дорослий');
});
test('getAgeCategory: 64 → дорослий', () => {
    expect(getAgeCategory(64)).toBe('дорослий');
});
test('getAgeCategory: 65 → пенсіонер', () => {
    expect(getAgeCategory(65)).toBe('пенсіонер');
});
test('getAgeCategory: -1 → некоректний вік', () => {
    expect(getAgeCategory(-1)).toBe('некоректний вік');
});

// Функція 2. calculateTotal(price, quantity, discount = 0)
// Рахує суму покупки: ціна × кількість, мінус знижка у відсотках. Повертає число.

// calculateTotal(100, 3) → 300
// calculateTotal(100, 3, 10) → 270
// discount необов'язковий, за замовчуванням 0.
// Якщо price або quantity від'ємні, або discount більший за 100 — повертай null.
// Мінімум 6 тестів: без знижки, зі знижкою, знижка 0, знижка 100, кількість 0, некоректні дані.


// Вимоги
// Кожен тест перевіряє один кейс і має зрозумілу назву: що на вході і що очікуємо.
// Хоча б один тест спочатку напиши навмисно неправильним, переконайся, що бачиш ❌ з повідомленням, і лише потім виправ.

function calculateTotal(price, quantity, discount = 0) {
    if (price < 0 || quantity < 0 || discount > 100) {
        return null;
    }
    const total = price * quantity;
    return total - (total * discount / 100);
}

test('calculateTotal: 100, 3 → 300', () => {
    expect(calculateTotal(100, 3)).toBe(300);
});
test('calculateTotal: 100, 3, 10 → 270', () => {
    expect(calculateTotal(100, 3, 10)).toBe(270);
});
test('calculateTotal: 100, 3, 0 → 300', () => {
    expect(calculateTotal(100, 3, 0)).toBe(300);
});
test('calculateTotal: 100, 3, 100 → 0', () => {
    expect(calculateTotal(100, 3, 100)).toBe(0);
});
test('calculateTotal: 100, 0 → 0', () => {
    expect(calculateTotal(100, 0)).toBe(0);
});
test('calculateTotal: -100, 3 → null', () => {
    expect(calculateTotal(-100, 3)).toBe(null);
});
test('calculateTotal: 100, 3, 110 → null', () => {
    expect(calculateTotal(100, 3, 110)).toBe(null);
});