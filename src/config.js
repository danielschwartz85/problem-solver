const Config = {
  pages: {
    problem: {
      description: 'תאר באופן חופשי את הבעיה',
      inputText: 'הקלד את סיפור הבעיה כאן..',
      tab: {
        name: 'בעיה'
      }
    },
    verbExtract: {
      description: 'העתק 2 עד 6 פעלים מרכזיים',
      inputText: 'כתוב פועל כאן..',
      cardHeader: 'הבעיה שתארת',
      emptyProblem: 'חסר תיאור הבעיה..',
      tab: {
        name:'פעלים'
      }
    },
    pastVerbs: {
      description: 'סמן פעלים שהופיעו בעברך',
      tab: {
        name: 'זיהויי פעלי עבר'
      }
    },
    negativeVerbs: {
      description: 'סמן פעולות עם קונוטצייה שלילית בעברך',
      tab: {
        name: 'פעולות השרדותיות'
      }
    },
    transformation: {
      description: 'עבור כל פועל בחר פעולה אשר יותר נכונה לך',
      inputText: 'במקום $..',
      tab: {
        name: 'טרנספורמציה'
      }
    },
    name: {
      description: 'שם פרטי',
      inputText: '',
      tab: {
        name: 'שם'
      }
    },
    newName: {
      description: 'בחר שם חדש המשקף את פעולות הטרנספורמציה אשר בחרת',
      inputText: '',
      tab: {
        name: 'שם חדש'
      }
    },
    pastDomino: {
      description:"תאר את חייך בעבר, התחל מ 'דו'.",
      inputText: '',
      tab: {
        name: 'עבר דומינו'
      }
    },
    futureDomino: {
      description: "הסבר כיצד אתה רואה את חייך בעתיד, התחל מ 'מי'.",
      inputText: '',
      tab: {
        name: 'עתיד דומינו'
      }
    },
    save: {
      tab: {
        name: 'שמור'
      }
    }
  },
  welcomeScreen: {
    header: "תהליכי חשיבה על בעיות",
    descriptions: [
      "לכל קונפליקט יש פתרון. הפתרון מתעכב או לא נמצא באותה עת רק בגלל חוסר הבשלות של האדם להבין את הפתרון מתוך עצמו.",
      "אם ברצונכם לפתור בעיות בדרך הנכונה הגעתם לתפישה המדויקת ",
      "כי הסוד של האדם הוא בהבנה. "
    ],
    descriptionSignature: "שלומית 2015.",
    myProblemsText: "הבעיות שלי",
    newProblemText: "בעיה חדשה"
  },
  problemScreen: {
    showBookText: "צפה",
    editText: "ערוך",
    deleteText: "מחק"
  },
  sideMenu: {
    newProblem: "בעיה חדשה",
    myProblems: "הבעיות שלי",
    emptyProblems: "כרגע הכל דבש, אין בעיות.."
  },
  solutionScreen: {
    man: {
      header: "סיפור חיי האדם",
      subHeader: "קונפליקטים אדמיים",
      description: "לכל קונפליקט יש פתרון. הפתרון מתעכב או לא נמצא באותה עת רק בגלל חוסר הבשלות של האדם להבין את הפתרון מתוך עצמו." +
                   "אם ברצונכם לפתור בעיות בדרך הנכונה הגעתם לתפישה המדויקת " +
                   "כי הסוד של האדם הוא בהבנה. "
    },
    beeing :{
      header: "פעולות פילוסופיות",
      subHeader: "קונפליקטים פילוסופיים",
      description: "לכל קונפליקט יש פתרון. הפתרון מתעכב או לא נמצא באותה עת רק בגלל חוסר הבשלות של האדם להבין את הפתרון מתוך עצמו." +
                   "אם ברצונכם לפתור בעיות בדרך הנכונה הגעתם לתפישה המדויקת " +
                   "כי הסוד של האדם הוא בהבנה. "
    },
    problemKeyNames: {
      description:"הבעיה שלי",
      verbs: "פעלים",
      transformationVerbs: "פעולות אתחול",
      negativeVerbs: "פעולות עם קונוטצייה שלילית",
      name: "שם",
      newName: "שם חדש",
      pastDomino: "עבר דומינו",
      futureDomino: "עתיד דומינו"
    }
  }
}

export default Config;
