interface SwitcherTitle {
    leftTitle: String,
    rightTitle: String
}

export const getSwitcherTitle = (lang: String): SwitcherTitle => {
    if (lang === 'RU') {
        return {
            leftTitle: 'Все товары',
            rightTitle: 'Список покупок'
        }
    }
    if (lang === 'DE') {
        return {
            leftTitle: 'Alle Waren',
            rightTitle: 'Einkaufsliste'
        }
    }
    else {
        return {
            leftTitle: 'All products',
            rightTitle: 'Shopping list'
        }
    }
}