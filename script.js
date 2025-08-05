// --- EMBEDDED LANGUAGE DATA ---
const allLanguageData = {
  "ja": {
    "appName": "熱中症フローチャート＆連絡先",
    "flowchart": {
      "start": {
        "question": "熱中症を疑う症状があるか.\n例：めまい、失神、筋肉痛、筋肉の硬直、大量の発汗、頭痛、不快感、吐き気、嘔吐、倦怠感、虚脱感、意識障害、けいれん、手足の運動障害、高体温その他異常",
        "options": [
          { "text": "ある", "next": "ある場合", "icon": "good.jpg" },
          { "text": "ない", "next": "ない場合", "icon": "bad.jpg" }
        ]
      },
      "ある場合": {
        "question": "呼びかけには応じるか。\n",
        "options": [
          { "text": "応じる", "next": "応じる場合", "icon": "good.jpg" },
          { "text": "応じない", "next": "応じない場合", "icon": "bad.jpg" },
          { "text": "曖昧", "next": "曖昧な場合、自力で水分補給不可能", "icon": "confused.jpg" }
        ]
      },
      "応じない場合": {
        "isResult": true,
        "question": "1．直ちに救急車を呼ぶこと。\n2.涼しい場所への避難、服をゆるめ身体を冷やすこと。\n3.重篤な場合は溺れないよう配慮しつつ直接水をかけるなど、とにかく冷やすこと。"
      },
      "ない場合": {
        "isResult": true,
        "question": "一瞬でも熱中症かな？と感じたらすぐ身体を冷やして休憩しましょう。"
      },
      "応じる場合": {
        "question": "涼しい場所へ避難しつつ、水分を自力で接種できるか。",
        "options": [
          { "text": "自力で水分補給可能", "next": "自力で水分補給可能な場合", "icon": "good.jpg" },
          { "text": "自力で水分補給不可能", "next": "曖昧な場合、自力で水分補給不可能", "icon": "bad.jpg" }
        ]
      },
      "曖昧な場合、自力で水分補給不可能": {
        "isResult": true,
        "question": "1.救急車を呼ぶことも視野に入れ、原則医療機関へ向かうこと。\n2.涼しい場所への避難、服をゆるめ身体を冷やすこと。\n"
      },
      "自力で水分補給可能な場合": {
        "question": "そのまま安静にして十分に休息を取り、その日の作業は休むこと。\n※一人にしないこと。もしくは数十分に一度程度様子を伺うこと。\n経過は良いですか？",
        "options": [
          { "text": "良い", "next": "帰ろう", "icon": "good.jpg" },
          { "text": "変わらない、あるいは悪化した", "next": "救急車", "icon": "bad.jpg" }
        ]
      },
      "救急車": {
        "isResult": true,
        "question": "熱中症の疑いが高いです。医療機関へ向かってください。"
      },
      "帰ろう": {
        "isResult": true,
        "question": "今日は無理せず家に帰って安静にしましょう。ご安全に！"
      }
    },
    "contacts": [
      { "name": "甲田収", "phone": "080-8986-0443" },
      { "name": "三戸内科", "phone": "086-229-3331" }
    ],
    "ui": {
      "heatDangerTitle": "今日の熱中症危険度",
      "heatDangerLoading": "情報を取得中...",
      "refreshButton": "更新",
      "flowchartModeButton": "フローチャート",
      "contactsModeButton": "連絡先",
      "questionEditorModeButton": "質問編集",
      "preventionModeButton": "予防と対策",
      "resultSuggestion": "あなたへの提案は…",
      "resultContactsTitle": "登録済みの緊急連絡先:",
      "noResultContactsMessage": "まだ連絡先が登録されていません。",
      "resultDisclaimerTitle": "【重要】",
      "resultDisclaimerText": "診断結果は、医師、救急隊員、その他の医療専門家による専門的な診断や治療に代わるものでは決してありません。この診断はあくまで目安です。 症状の判断や対応に迷った場合、またはアプリの結果に関わらず、少しでも異常を感じたら、直ちに医療機関を受診するか、救急車（119番）を呼んでください。",
      "restartButton": "最初から",
      "endButton": "終了",
      "contactsTitle": "緊急連絡先",
      "addNewContactTitle": "新しい連絡先を追加",
      "contactNamePlaceholder": "名前",
      "contactPhonePlaceholder": "電話番号",
      "addContactButton": "連絡先を追加",
      "noContactsMessage": "まだ連絡先が登録されていません。",
      "editQuestionTitle": "フローチャート質問編集",
      "exportFlowchartButton": "フローチャートをエクスポート",
      "importFlowchartButton": "フローチャートをインポート",
      "resetDataButton": "データをリセット",
      "editExistingQuestionTitle": "既存の質問を編集",
      "selectQuestionPlaceholder": "質問を選択してください",
      "questionIdLabel": "質問ID:",
      "questionTextLabel": "質問文/提案文:",
      "isResultNodeLabel": "結果ノードにする",
      "optionsLabel": "選択肢:",
      "addOptionButton": "選択肢を追加",
      "deleteQuestionButton": "質問を削除",
      "saveQuestionButton": "質問を保存",
      "addNewQuestionTitle": "新しい質問を追加",
      "newQuestionIdLabel": "新しい質問ID:",
      "newQuestionIdPlaceholder": "例: step1",
      "newQuestionTextPlaceholder": "新しい質問のテキスト",
      "saveNewQuestionButton": "新しい質問を保存",
      "reorderQuestionsTitle": "質問の並べ替え",
      "preventionTitle": "熱中症の予防と対策",
      "prevention1Title": "① こまめな水分・塩分補給",
      "prevention1Text": "のどが渇く前に、こまめに水分を補給しましょう。汗をたくさんかいた時は、スポーツドリンクや経口補水液などで塩分も一緒に補給することが大切です。",
      "prevention2Title": "② 涼しい服装を心がける",
      "prevention2Text": "吸湿性や速乾性に優れた、ゆったりとした服装を心がけましょう。空調服を着て作業しましょう。ヘルメットに防暑タレを付けるのもおすすめです。",
      "prevention3Title": "③ 暑さを避ける工夫",
      "prevention3Text": "日中の特に暑い時間帯（11時～15時頃）の作業、WBGT値が28を超える場合は1時間に1度10分など細かな休憩を取りましょう。室内では、扇風機やエアコンを適切に利用して、室温が28℃を超えないように調整してください。",
      "prevention4Title": "④ 体調管理を万全に",
      "prevention4Text": "睡眠不足や二日酔いなど、体調が万全でない時は熱中症になりやすくなります。日頃から十分な休息をとり、バランスの良い食事を心がけましょう。",
      "prevention5Title": "⑤ 周囲の人にも気を配る",
      "prevention5Text": "体調の悪い方は特に熱中症になりやすいです。周りの人と声を掛け合い、お互いの体調に気を配りましょう。",
      "prevention6Title": "⑥ 我慢しない",
      "prevention6Text": "熱中症は自覚症状が早期発見のカギです。見た目ではわからなく我慢をしていたら重篤化してしまいます。少しでも身体に異変を感じたら休憩しましょう。",
      "mainDisclaimer": "本アプリの利用により生じた、いかなる健康被害、損害、または不利益について、当方は一切の責任を負いかねます。利用者自身の判断と責任において本アプリをご利用ください。",
      "editContactButton": "編集",
      "deleteContactButton": "削除",
      "saveChangesButton": "変更を保存",
      "confirmDeleteContact": "この連絡先を削除しますか？",
      "errorIdExists": "この質問IDは既に存在します。別のIDを使用してください。",
      "errorNodeNeedsOptions": "質問ノードには少なくとも1つの選択肢が必要です。または、結果ノードとして保存してください。",
      "errorIdAndTextRequired": "質問IDと質問文/提案文は必須です。",
      "confirmResetFlowchart": "フローチャートデータを初期状態にリセットしますか？この操作は元に戻せません。",
      "confirmOverwriteFlowchart": "現在のフローチャートデータを上書きしますか？",
      "errorImportingFile": "JSONファイルの読み込みまたは解析に失敗しました。",
      "flowchartImported": "フローチャートデータがインポートされました！",
      "flowchartReset": "フローチャートデータがリセットされました！",
      "questionSaved": "質問が正常に保存されました！",
      "newQuestionSaved": "新しい質問が正常に保存されました！",
      "questionDeleted": "質問が削除されました！",
      "confirmDeleteQuestion": "本当に質問 '{id}' を削除しますか？",
      "heatDangerStatusLoadingLocation": "位置情報を取得中...",
      "heatDangerStatusLoadingWeather": "天気情報を取得中...",
      "heatDangerStatusLocationError": "位置情報が利用できません",
      "heatDangerStatusWeatherError": "天気情報の取得に失敗",
      "heatDangerStatusLocationPermissionDenied": "位置情報の利用が許可されていません。",
      "heatDangerStatusLocationUnavailable": "現在地を特定できませんでした。",
      "heatDangerStatusLocationTimeout": "位置情報の取得がタイムアウトしました。",
      "heatDangerStatusUnknownError": "不明なエラーが発生しました。",
      "heatDangerAddressError": "住所が取得できませんでした",
      "heatDangerAddressFetchError": "住所の取得に失敗しました",
      "heatDangerAddressFetchErrorDetail": "住所の取得中にエラーが発生しました",
      "heatDangerCurrentTemp": "(現在の推定気温: {temp}°C)",
      "heatDangerCurrentHumidity": "現在の湿度: {humidity}%",
      "heatDangerCurrentWBGT": "現在のWBGT: {wbgt}",
      "heatDangerLevelAttention": "注意",
      "heatDangerLevelWarning": "警戒",
      "heatDangerLevelSevereWarning": "厳重警戒",
      "heatDangerLevelDanger": "危険",
      "optionIconLabel": "アイコン:",
      "optionIconNone": "なし",
      "optionTextPlaceholder": "選択肢テキスト",
      "optionNextPlaceholder": "次の質問ID",
      "resultNodeInfo": "このノードは結果ノードなので、選択肢はありません。",
      "errorNextNodeNotFound": "エラー: 次の項目が見つかりません ({id})。質問編集モードで存在するか確認してください。",
      "inputNameAndPhone": "名前と電話番号を入力してください。"
    }
  },
  "en": {
    "appName": "Heatstroke Flowchart & Contacts",
    "flowchart": {
      "start": {
        "question": "Do you have symptoms of heatstroke?\nExamples: dizziness, fainting, muscle aches, muscle stiffness, heavy sweating, headache, nausea, vomiting, fatigue, collapse, confusion, convulsions, limb motor impairment, high body temperature, or other abnormalities.",
        "options": [
          { "text": "Yes", "next": "symptoms_yes", "icon": "good.jpg" },
          { "text": "No", "next": "symptoms_no", "icon": "bad.jpg" }
        ]
      },
      "symptoms_yes": {
        "question": "Can the person respond to calls?",
        "options": [
          { "text": "Yes", "next": "responds_yes", "icon": "good.jpg" },
          { "text": "No", "next": "responds_no", "icon": "bad.jpg" },
          { "text": "Vague", "next": "responds_vague", "icon": "confused.jpg" }
        ]
      },
      "responds_no": {
        "isResult": true,
        "question": "1. Call an ambulance immediately.\n2. Move to a cool place, loosen clothing, and cool the body.\n3. In severe cases, pour water on the person, taking care not to let them drown, and cool them down by any means necessary."
      },
      "symptoms_no": {
        "isResult": true,
        "question": "If you feel even a little like you might have heatstroke, cool your body and rest immediately."
      },
      "responds_yes": {
        "question": "Can the person drink water on their own after moving to a cool place?",
        "options": [
          { "text": "Yes, can drink on their own", "next": "can_drink", "icon": "good.jpg" },
          { "text": "No, cannot drink on their own", "next": "responds_vague", "icon": "bad.jpg" }
        ]
      },
      "responds_vague": {
        "isResult": true,
        "question": "1. Consider calling an ambulance and, in principle, go to a medical institution.\n2. Move to a cool place, loosen clothing, and cool the body."
      },
      "can_drink": {
        "question": "Rest quietly, take a break from work for the day.\n*Do not leave the person alone. Check on them every few tens of minutes.\nIs their condition improving?",
        "options": [
          { "text": "Yes, improving", "next": "go_home", "icon": "good.jpg" },
          { "text": "No change or worsening", "next": "call_ambulance", "icon": "bad.jpg" }
        ]
      },
      "call_ambulance": {
        "isResult": true,
        "question": "There is a high suspicion of heatstroke. Please go to a medical institution."
      },
      "go_home": {
        "isResult": true,
        "question": "Don't push yourself today. Go home and rest. Stay safe!"
      }
    },
    "contacts": [
      { "name": "Osamu Koda", "phone": "080-8986-0443" },
      { "name": "Mito Internal Medicine Clinic", "phone": "086-229-3331" }
    ],
    "ui": {
      "heatDangerTitle": "Today's Heatstroke Risk",
      "heatDangerLoading": "Fetching information...",
      "refreshButton": "Refresh",
      "flowchartModeButton": "Flowchart",
      "contactsModeButton": "Contacts",
      "questionEditorModeButton": "Edit Questions",
      "preventionModeButton": "Prevention",
      "resultSuggestion": "Our suggestion for you is...",
      "resultContactsTitle": "Registered Emergency Contacts:",
      "noResultContactsMessage": "No contacts have been registered yet.",
      "resultDisclaimerTitle": "【IMPORTANT】",
      "resultDisclaimerText": "The diagnosis results are not a substitute for professional diagnosis or treatment by a doctor, paramedic, or other medical professional. This diagnosis is only a guide. If you are unsure about how to judge or respond to your symptoms, or if you feel any abnormality regardless of the app's results, please see a doctor or call an ambulance (119) immediately.",
      "restartButton": "Start Over",
      "endButton": "End",
      "contactsTitle": "Emergency Contacts",
      "addNewContactTitle": "Add New Contact",
      "contactNamePlaceholder": "Name",
      "contactPhonePlaceholder": "Phone Number",
      "addContactButton": "Add Contact",
      "noContactsMessage": "No contacts have been registered yet.",
      "editQuestionTitle": "Edit Flowchart Questions",
      "exportFlowchartButton": "Export Flowchart",
      "importFlowchartButton": "Import Flowchart",
      "resetDataButton": "Reset Data",
      "editExistingQuestionTitle": "Edit Existing Question",
      "selectQuestionPlaceholder": "Select a question",
      "questionIdLabel": "Question ID:",
      "questionTextLabel": "Question/Suggestion Text:",
      "isResultNodeLabel": "Make this a result node",
      "optionsLabel": "Options:",
      "addOptionButton": "Add Option",
      "deleteQuestionButton": "Delete Question",
      "saveQuestionButton": "Save Question",
      "addNewQuestionTitle": "Add New Question",
      "newQuestionIdLabel": "New Question ID:",
      "newQuestionIdPlaceholder": "e.g., step1",
      "newQuestionTextPlaceholder": "Text for the new question",
      "saveNewQuestionButton": "Save New Question",
      "reorderQuestionsTitle": "Reorder Questions",
      "preventionTitle": "Heatstroke Prevention and Measures",
      "prevention1Title": "① Frequent Hydration and Salt Intake",
      "prevention1Text": "Drink fluids frequently, before you feel thirsty. When you sweat a lot, it's important to replenish salt as well with sports drinks or oral rehydration solutions.",
      "prevention2Title": "② Wear Cool Clothing",
      "prevention2Text": "Wear loose-fitting clothing that is absorbent and quick-drying. Wear air-conditioned clothing when working. It is also recommended to attach a sunshade to your helmet.",
      "prevention3Title": "③ Ways to Avoid the Heat",
      "prevention3Text": "Take frequent breaks, such as 10 minutes every hour, when working during the hottest times of the day (around 11:00-15:00) or when the WBGT value exceeds 28. Indoors, use fans and air conditioners appropriately to keep the room temperature from exceeding 28°C.",
      "prevention4Title": "④ Maintain Good Health",
      "prevention4Text": "You are more likely to get heatstroke when you are not in good health, such as from lack of sleep or a hangover. Get enough rest and eat a balanced diet on a daily basis.",
      "prevention5Title": "⑤ Be Mindful of Others",
      "prevention5Text": "People who are not feeling well are particularly susceptible to heatstroke. Talk to those around you and be mindful of each other's health.",
      "prevention6Title": "⑥ Don't Endure It",
      "prevention6Text": "Early detection of symptoms is key to heatstroke. If you endure it because it's not visible, it can become serious. Take a break if you feel even the slightest abnormality in your body.",
      "mainDisclaimer": "We are not responsible for any health damage, loss, or disadvantage caused by the use of this application. Please use this application at your own discretion and responsibility.",
      "editContactButton": "Edit",
      "deleteContactButton": "Delete",
      "saveChangesButton": "Save Changes",
      "confirmDeleteContact": "Are you sure you want to delete this contact?",
      "errorIdExists": "This Question ID already exists. Please use a different ID.",
      "errorNodeNeedsOptions": "A question node must have at least one option, or be saved as a result node.",
      "errorIdAndTextRequired": "Question ID and Question/Suggestion Text are required.",
      "confirmResetFlowchart": "Are you sure you want to reset the flowchart data to its initial state? This action cannot be undone.",
      "confirmOverwriteFlowchart": "Are you sure you want to overwrite the current flowchart data?",
      "errorImportingFile": "Failed to load or parse the JSON file.",
      "flowchartImported": "Flowchart data has been imported!",
      "flowchartReset": "Flowchart data has been reset!",
      "questionSaved": "Question saved successfully!",
      "newQuestionSaved": "New question saved successfully!",
      "questionDeleted": "Question has been deleted!",
      "confirmDeleteQuestion": "Are you sure you want to delete the question '{id}'?",
      "heatDangerStatusLoadingLocation": "Getting location...",
      "heatDangerStatusLoadingWeather": "Fetching weather data...",
      "heatDangerStatusLocationError": "Geolocation is not available",
      "heatDangerStatusWeatherError": "Failed to fetch weather data",
      "heatDangerStatusLocationPermissionDenied": "Permission to use location was denied.",
      "heatDangerStatusLocationUnavailable": "Could not determine your location.",
      "heatDangerStatusLocationTimeout": "Timed out while getting location.",
      "heatDangerStatusUnknownError": "An unknown error occurred.",
      "heatDangerAddressError": "Could not get address",
      "heatDangerAddressFetchError": "Failed to fetch address",
      "heatDangerAddressFetchErrorDetail": "An error occurred while fetching the address",
      "heatDangerCurrentTemp": "(Current estimated temperature: {temp}°C)",
      "heatDangerCurrentHumidity": "Current Humidity: {humidity}%",
      "heatDangerCurrentWBGT": "Current WBGT: {wbgt}",
      "heatDangerLevelAttention": "Caution",
      "heatDangerLevelWarning": "Alert",
      "heatDangerLevelSevereWarning": "Severe Alert",
      "heatDangerLevelDanger": "Danger",
      "optionIconLabel": "Icon:",
      "optionIconNone": "None",
      "optionTextPlaceholder": "Option text",
      "optionNextPlaceholder": "Next question ID",
      "resultNodeInfo": "This is a result node, so it has no options.",
      "errorNextNodeNotFound": "Error: Next item not found ({id}). Please check if it exists in the question editor mode.",
      "inputNameAndPhone": "Please enter a name and phone number."
    }
  },
  "zh": {
    "appName": "中暑流程图和联系方式",
    "flowchart": {
      "start": {
        "question": "您有中暑症状吗？\n例如：头晕、昏厥、肌肉酸痛、肌肉僵硬、大量出汗、头痛、恶心、呕吐、疲劳、虚脱、意识模糊、抽搐、肢体运动障碍、体温过高或其他异常。",
        "options": [
          { "text": "有", "next": "symptoms_yes", "icon": "good.jpg" },
          { "text": "没有", "next": "symptoms_no", "icon": "bad.jpg" }
        ]
      },
      "symptoms_yes": {
        "question": "患者能回应呼叫吗？",
        "options": [
          { "text": "能", "next": "responds_yes", "icon": "good.jpg" },
          { "text": "不能", "next": "responds_no", "icon": "bad.jpg" },
          { "text": "模糊", "next": "responds_vague", "icon": "confused.jpg" }
        ]
      },
      "responds_no": {
        "isResult": true,
        "question": "1. 立即呼叫救护车。\n2. 移至阴凉处，解开衣物，给身体降温。\n3. 在严重的情况下，给患者浇水，注意不要让他们溺水，并采取一切必要手段给他们降温。"
      },
      "symptoms_no": {
        "isResult": true,
        "question": "如果您感觉自己可能中暑了，请立即给身体降温并休息。"
      },
      "responds_yes": {
        "question": "移至阴凉处后，患者能自己喝水吗？",
        "options": [
          { "text": "能，可以自己喝水", "next": "can_drink", "icon": "good.jpg" },
          { "text": "不能，无法自己喝水", "next": "responds_vague", "icon": "bad.jpg" }
        ]
      },
      "responds_vague": {
        "isResult": true,
        "question": "1. 考虑呼叫救护车，原则上应前往医疗机构。\n2. 移至阴凉处，解开衣物，给身体降温。"
      },
      "can_drink": {
        "question": "安静休息，当天停止工作。\n*不要让患者独处。每隔几十分钟检查一次他们的情况。\n他们的情况在好转吗？",
        "options": [
          { "text": "是的，在好转", "next": "go_home", "icon": "good.jpg" },
          { "text": "没有变化或恶化", "next": "call_ambulance", "icon": "bad.jpg" }
        ]
      },
      "call_ambulance": {
        "isResult": true,
        "question": "高度怀疑中暑。请前往医疗机构。"
      },
      "go_home": {
        "isResult": true,
        "question": "今天不要勉强自己。回家休息。注意安全！"
      }
    },
    "contacts": [
      { "name": "甲田修", "phone": "080-8986-0443" },
      { "name": "三户内科", "phone": "086-229-3331" }
    ],
    "ui": {
      "heatDangerTitle": "今日中暑风险",
      "heatDangerLoading": "正在获取信息...",
      "refreshButton": "刷新",
      "flowchartModeButton": "流程图",
      "contactsModeButton": "联系方式",
      "questionEditorModeButton": "编辑问题",
      "preventionModeButton": "预防",
      "resultSuggestion": "我们给您的建议是...",
      "resultContactsTitle": "已注册的紧急联系人：",
      "noResultContactsMessage": "尚未注册任何联系人。",
      "resultDisclaimerTitle": "【重要】",
      "resultDisclaimerText": "诊断结果不能替代医生、护理人员或其他医疗专业人员的专业诊断或治疗。此诊断仅供参考。如果您不确定如何判断或应对自己的症状，或者无论应用程序的结果如何，您都感到任何异常，请立即就医或呼叫救护车（119）。",
      "restartButton": "重新开始",
      "endButton": "结束",
      "contactsTitle": "紧急联系人",
      "addNewContactTitle": "添加新联系人",
      "contactNamePlaceholder": "姓名",
      "contactPhonePlaceholder": "电话号码",
      "addContactButton": "添加联系人",
      "noContactsMessage": "尚未注册任何联系人。",
      "editQuestionTitle": "编辑流程图问题",
      "exportFlowchartButton": "导出流程图",
      "importFlowchartButton": "导入流程图",
      "resetDataButton": "重置数据",
      "editExistingQuestionTitle": "编辑现有问题",
      "selectQuestionPlaceholder": "选择一个问题",
      "questionIdLabel": "问题ID：",
      "questionTextLabel": "问题/建议文本：",
      "isResultNodeLabel": "将此设为结果节点",
      "optionsLabel": "选项：",
      "addOptionButton": "添加选项",
      "deleteQuestionButton": "删除问题",
      "saveQuestionButton": "保存问题",
      "addNewQuestionTitle": "添加新问题",
      "newQuestionIdLabel": "新问题ID：",
      "newQuestionIdPlaceholder": "例如：step1",
      "newQuestionTextPlaceholder": "新问题的文本",
      "saveNewQuestionButton": "保存新问题",
      "reorderQuestionsTitle": "重新排序问题",
      "preventionTitle": "中暑预防和措施",
      "prevention1Title": "① 频繁补充水分和盐分",
      "prevention1Text": "在感到口渴之前，要经常喝水。当您出汗过多时，通过运动饮料或口服补液盐补充盐分也很重要。",
      "prevention2Title": "② 穿凉爽的衣服",
      "prevention2Text": "穿宽松、吸湿、快干的衣服。工作时穿空调服。建议在头盔上加装遮阳板。",
      "prevention3Title": "③ 避暑方法",
      "prevention3Text": "在一天中最热的时候（大约11:00-15:00）工作或WBGT值超过28时，要经常休息，例如每小时休息10分钟。在室内，适当使用风扇和空调，使室温不超过28°C。",
      "prevention4Title": "④ 保持身体健康",
      "prevention4Text": "当您身体不适时，例如睡眠不足或宿醉，您更容易中暑。每天要保证充足的休息和均衡的饮食。",
      "prevention5Title": "⑤ 关心他人",
      "prevention5Text": "身体不适的人尤其容易中暑。与周围的人交谈，并注意彼此的健康。",
      "prevention6Title": "⑥ 不要忍耐",
      "prevention6Text": "及早发现症状是中暑的关键。如果您因为看不见而忍耐，情况可能会变得严重。如果您感到身体有丝毫异常，请休息一下。",
      "mainDisclaimer": "对于因使用本应用程序而造成的任何健康损害、损失或不利，我们概不负责。请您自行决定并负责使用本应用程序。",
      "editContactButton": "编辑",
      "deleteContactButton": "删除",
      "saveChangesButton": "保存更改",
      "confirmDeleteContact": "您确定要删除此联系人吗？",
      "errorIdExists": "此问题ID已存在。请使用其他ID。",
      "errorNodeNeedsOptions": "问题节点必须至少有一个选项，或另存为结果节点。",
      "errorIdAndTextRequired": "问题ID和问题/建议文本为必填项。",
      "confirmResetFlowchart": "您确定要将流程图数据重置为初始状态吗？此操作无法撤消。",
      "confirmOverwriteFlowchart": "您确定要覆盖当前的流程图数据吗？",
      "errorImportingFile": "加载或解析JSON文件失败。",
      "flowchartImported": "流程图数据已导入！",
      "flowchartReset": "流程图数据已重置！",
      "questionSaved": "问题已成功保存！",
      "newQuestionSaved": "新问题已成功保存！",
      "questionDeleted": "问题已删除！",
      "confirmDeleteQuestion": "您确定要删除问题“{id}”吗？",
      "heatDangerStatusLoadingLocation": "正在获取位置...",
      "heatDangerStatusLoadingWeather": "正在获取天气数据...",
      "heatDangerStatusLocationError": "地理位置不可用",
      "heatDangerStatusWeatherError": "获取天气数据失败",
      "heatDangerStatusLocationPermissionDenied": "使用位置的权限被拒绝。",
      "heatDangerStatusLocationUnavailable": "无法确定您的位置。",
      "heatDangerStatusLocationTimeout": "获取位置超时。",
      "heatDangerStatusUnknownError": "发生未知错误。",
      "heatDangerAddressError": "无法获取地址",
      "heatDangerAddressFetchError": "获取地址失败",
      "heatDangerAddressFetchErrorDetail": "获取地址时发生错误",
      "heatDangerCurrentTemp": "（当前估计温度：{temp}°C）",
      "heatDangerCurrentHumidity": "当前湿度: {humidity}%",
      "heatDangerCurrentWBGT": "当前WBGT: {wbgt}",
      "heatDangerLevelAttention": "注意",
      "heatDangerLevelWarning": "警惕",
      "heatDangerLevelSevereWarning": "严重警惕",
      "heatDangerLevelDanger": "危险",
      "optionIconLabel": "图标：",
      "optionIconNone": "无",
      "optionTextPlaceholder": "选项文本",
      "optionNextPlaceholder": "下一个问题ID",
      "resultNodeInfo": "这是一个结果节点，因此没有选项。",
      "errorNextNodeNotFound": "错误：找不到下一个项目（{id}）。请检查它是否存在于问题编辑器模式中。",
      "inputNameAndPhone": "请输入姓名和电话号码。"
    }
  },
  "vi": {
    "appName": "Sơ đồ quy trình say nắng & Danh bạ",
    "flowchart": {
      "start": {
        "question": "Bạn có triệu chứng say nắng không?\nVí dụ: chóng mặt, ngất xỉu, đau cơ, cứng cơ, đổ mồ hôi nhiều, nhức đầu, buồn nôn, nôn, mệt mỏi, suy sụp, lú lẫn, co giật, suy giảm vận động tay chân, nhiệt độ cơ thể cao hoặc các bất thường khác.",
        "options": [
          { "text": "Có", "next": "symptoms_yes", "icon": "good.jpg" },
          { "text": "Không", "next": "symptoms_no", "icon": "bad.jpg" }
        ]
      },
      "symptoms_yes": {
        "question": "Người đó có thể trả lời các cuộc gọi không?",
        "options": [
          { "text": "Có", "next": "responds_yes", "icon": "good.jpg" },
          { "text": "Không", "next": "responds_no", "icon": "bad.jpg" },
          { "text": "Mơ hồ", "next": "responds_vague", "icon": "confused.jpg" }
        ]
      },
      "responds_no": {
        "isResult": true,
        "question": "1. Gọi xe cứu thương ngay lập tức.\n2. Di chuyển đến nơi thoáng mát, nới lỏng quần áo và làm mát cơ thể.\n3. Trong trường hợp nghiêm trọng, hãy đổ nước lên người, cẩn thận để họ không bị chết đuối và làm mát họ bằng mọi cách cần thiết。"
      },
      "symptoms_no": {
        "isResult": true,
        "question": "Nếu bạn cảm thấy dù chỉ một chút giống như mình có thể bị say nắng, hãy làm mát cơ thể và nghỉ ngơi ngay lập tức。"
      },
      "responds_yes": {
        "question": "Người đó có thể tự uống nước sau khi di chuyển đến nơi thoáng mát không？",
        "options": [
          { "text": "Có, có thể tự uống", "next": "can_drink", "icon": "good.jpg" },
          { "text": "Không, không thể tự uống", "next": "responds_vague", "icon": "bad.jpg" }
        ]
      },
      "responds_vague": {
        "isResult": true,
        "question": "1. Cân nhắc gọi xe cứu thương và về nguyên tắc, hãy đến cơ sở y tế。\n2. Di chuyển đến nơi thoáng mát, nới lỏng quần áo và làm mát cơ thể。"
      },
      "can_drink": {
        "question": "Nghỉ ngơi yên tĩnh, nghỉ làm trong ngày。\n*Không để người đó một mình. Kiểm tra họ vài chục phút một lần。\nTình trạng của họ có cải thiện không？",
        "options": [
          { "text": "Có, đang cải thiện", "next": "go_home", "icon": "good.jpg" },
          { "text": "Không thay đổi hoặc xấu đi", "next": "call_ambulance", "icon": "bad.jpg" }
        ]
      },
      "call_ambulance": {
        "isResult": true,
        "question": "Có nghi ngờ cao về say nắng. Vui lòng đến cơ sở y tế。"
      },
      "go_home": {
        "isResult": true,
        "question": "Hôm nay đừng gắng sức. Về nhà nghỉ ngơi. Giữ an toàn！"
      }
    },
    "contacts": [
      { "name": "Osamu Koda", "phone": "080-8986-0443" },
      { "name": "Phòng khám nội khoa Mito", "phone": "086-229-3331" }
    ],
    "ui": {
      "heatDangerTitle": "Rủi ro say nắng hôm nay",
      "heatDangerLoading": "Đang tìm nạp thông tin...",
      "refreshButton": "Làm mới",
      "flowchartModeButton": "Sơ đồ quy trình",
      "contactsModeButton": "Danh bạ",
      "questionEditorModeButton": "Chỉnh sửa câu hỏi",
      "preventionModeButton": "Phòng ngừa",
      "resultSuggestion": "Gợi ý của chúng tôi cho bạn là...",
      "resultContactsTitle": "Danh bạ khẩn cấp đã đăng ký:",
      "noResultContactsMessage": "Chưa có danh bạ nào được đăng ký.",
      "resultDisclaimerTitle": "【QUAN TRỌNG】",
      "resultDisclaimerText": "Kết quả chẩn đoán không thể thay thế cho chẩn đoán hoặc điều trị chuyên nghiệp của bác sĩ, nhân viên y tế hoặc chuyên gia y tế khác. Chẩn đoán này chỉ là một hướng dẫn. Nếu bạn không chắc chắn về cách đánh giá hoặc ứng phó với các triệu chứng của mình, hoặc nếu bạn cảm thấy bất kỳ bất thường nào bất kể kết quả của ứng dụng, vui lòng đến gặp bác sĩ hoặc gọi xe cứu thương (119) ngay lập tức.",
      "restartButton": "Bắt đầu lại",
      "endButton": "Kết thúc",
      "contactsTitle": "Danh bạ khẩn cấp",
      "addNewContactTitle": "Thêm danh bạ mới",
      "contactNamePlaceholder": "Tên",
      "contactPhonePlaceholder": "Số điện thoại",
      "addContactButton": "Thêm danh bạ",
      "noContactsMessage": "Chưa có danh bạ nào được đăng ký.",
      "editQuestionTitle": "Chỉnh sửa câu hỏi sơ đồ quy trình",
      "exportFlowchartButton": "Xuất sơ đồ quy trình",
      "importFlowchartButton": "Nhập sơ đồ quy trình",
      "resetDataButton": "Đặt lại dữ liệu",
      "editExistingQuestionTitle": "Chỉnh sửa câu hỏi hiện có",
      "selectQuestionPlaceholder": "Chọn một câu hỏi",
      "questionIdLabel": "ID câu hỏi:",
      "questionTextLabel": "Văn bản câu hỏi/gợi ý:",
      "isResultNodeLabel": "Đặt đây là nút kết quả",
      "optionsLabel": "Tùy chọn:",
      "addOptionButton": "Thêm tùy chọn",
      "deleteQuestionButton": "Xóa câu hỏi",
      "saveQuestionButton": "Lưu câu hỏi",
      "addNewQuestionTitle": "Thêm câu hỏi mới",
      "newQuestionIdLabel": "ID câu hỏi mới:",
      "newQuestionIdPlaceholder": "ví dụ: step1",
      "newQuestionTextPlaceholder": "Văn bản cho câu hỏi mới",
      "saveNewQuestionButton": "Lưu câu hỏi mới",
      "reorderQuestionsTitle": "Sắp xếp lại câu hỏi",
      "preventionTitle": "Phòng ngừa và các biện pháp say nắng",
      "prevention1Title": "① Bổ sung nước và muối thường xuyên",
      "prevention1Text": "Uống nước thường xuyên, trước khi bạn cảm thấy khát. Khi bạn đổ mồ hôi nhiều, điều quan trọng là phải bổ sung muối cũng như với đồ uống thể thao hoặc dung dịch bù nước đường uống.",
      "prevention2Title": "② Mặc quần áo mát mẻ",
      "prevention2Text": "Mặc quần áo rộng rãi, thấm hút và nhanh khô. Mặc quần áo có điều hòa không khí khi làm việc. Cũng nên gắn tấm che nắng vào mũ bảo hiểm của bạn.",
      "prevention3Title": "③ Cách tránh nóng",
      "prevention3Text": "Nghỉ giải lao thường xuyên, chẳng hạn như 10 phút mỗi giờ, khi làm việc vào những thời điểm nóng nhất trong ngày (khoảng 11:00-15:00) hoặc khi giá trị WBGT vượt quá 28. Trong nhà, sử dụng quạt và máy điều hòa không khí một cách thích hợp để giữ nhiệt độ phòng không vượt quá 28°C.",
      "prevention4Title": "④ Duy trì sức khỏe tốt",
      "prevention4Text": "Bạn có nhiều khả năng bị say nắng hơn khi bạn không có sức khỏe tốt, chẳng hạn như do thiếu ngủ hoặc nôn nao. Hãy nghỉ ngơi đầy đủ và ăn một chế độ ăn uống cân bằng hàng ngày.",
      "prevention5Title": "⑤ Hãy quan tâm đến những người khác",
      "prevention5Text": "Những người không cảm thấy khỏe đặc biệt dễ bị say nắng. Hãy nói chuyện với những người xung quanh bạn và quan tâm đến sức khỏe của nhau.",
      "prevention6Title": "⑥ Đừng chịu đựng",
      "prevention6Text": "Phát hiện sớm các triệu chứng là chìa khóa để phòng chống say nắng. Nếu bạn cố gắng chịu đựng vì các triệu chứng không rõ ràng, tình trạng có thể trở nên nghiêm trọng. Hãy nghỉ ngơi ngay nếu bạn cảm thấy có bất kỳ điều gì bất thường trong cơ thể.",
      "mainDisclaimer": "Chúng tôi không chịu trách nhiệm cho bất kỳ thiệt hại, mất mát hoặc bất lợi nào về sức khỏe do việc sử dụng ứng dụng này gây ra. Vui lòng sử dụng ứng dụng này theo quyết định và trách nhiệm của riêng bạn.",
      "editContactButton": "Chỉnh sửa",
      "deleteContactButton": "Xóa",
      "saveChangesButton": "Lưu thay đổi",
      "confirmDeleteContact": "Bạn có chắc chắn muốn xóa liên hệ này không?",
      "errorIdExists": "ID câu hỏi này đã tồn tại. Vui lòng sử dụng một ID khác.",
      "errorNodeNeedsOptions": "Một nút câu hỏi phải có ít nhất một tùy chọn hoặc được lưu dưới dạng nút kết quả.",
      "errorIdAndTextRequired": "ID câu hỏi và Văn bản câu hỏi/gợi ý là bắt buộc.",
      "confirmResetFlowchart": "Bạn có chắc chắn muốn đặt lại dữ liệu sơ đồ quy trình về trạng thái ban đầu không? Hành động này không thể hoàn tác.",
      "confirmOverwriteFlowchart": "Bạn có chắc chắn muốn ghi đè lên dữ liệu sơ đồ quy trình hiện tại không?",
      "errorImportingFile": "Không thể tải hoặc phân tích cú pháp tệp JSON.",
      "flowchartImported": "Dữ liệu sơ đồ quy trình đã được nhập!",
      "flowchartReset": "Dữ liệu sơ đồ quy trình đã được đặt lại!",
      "questionSaved": "Câu hỏi đã được lưu thành công!",
      "newQuestionSaved": "Câu hỏi mới đã được lưu thành công!",
      "questionDeleted": "Câu hỏi đã bị xóa!",
      "confirmDeleteQuestion": "您确定要删除问题“{id}”吗？",
      "heatDangerStatusLoadingLocation": "Đang lấy vị trí...",
      "heatDangerStatusLoadingWeather": "Đang tìm nạp dữ liệu thời tiết...",
      "heatDangerStatusLocationError": "Không có định vị địa lý",
      "heatDangerStatusWeatherError": "Không thể tìm nạp dữ liệu thời tiết",
      "heatDangerStatusLocationPermissionDenied": "Quyền sử dụng vị trí đã bị từ chối.",
      "heatDangerStatusLocationUnavailable": "Không thể xác định vị trí của bạn.",
      "heatDangerStatusLocationTimeout": "Hết thời gian chờ trong khi lấy vị trí.",
      "heatDangerStatusUnknownError": "Đã xảy ra lỗi không xác định.",
      "heatDangerAddressError": "Không thể lấy địa chỉ",
      "heatDangerAddressFetchError": "Không thể tìm nạp địa chỉ",
      "heatDangerAddressFetchErrorDetail": "Đã xảy ra lỗi trong khi tìm nạp địa chỉ",
      "heatDangerCurrentTemp": "(Nhiệt độ ước tính hiện tại: {temp}°C)",
      "heatDangerCurrentHumidity": "Độ ẩm hiện tại: {humidity}%",
      "heatDangerCurrentWBGT": "WBGT hiện tại: {wbgt}",
      "heatDangerLevelAttention": "Thận trọng",
      "heatDangerLevelWarning": "Cảnh báo",
      "heatDangerLevelSevereWarning": "Cảnh báo nghiêm trọng",
      "heatDangerLevelDanger": "Nguy hiểm",
      "optionIconLabel": "Biểu tượng:",
      "optionIconNone": "Không có",
      "optionTextPlaceholder": "Văn bản tùy chọn",
      "optionNextPlaceholder": "ID câu hỏi tiếp theo",
      "resultNodeInfo": "Đây là một nút kết quả, vì vậy nó không có tùy chọn.",
      "errorNextNodeNotFound": "Lỗi: Không tìm thấy mục tiếp theo ({id}). Vui lòng kiểm tra xem nó có tồn tại ở chế độ chỉnh sửa câu hỏi không.",
      "inputNameAndPhone": "Vui lòng nhập tên và số điện thoại."
    }
  }
};

// --- STATE MANAGEMENT ---
let currentLanguage = 'ja';
let languageData = {};
let flowchartData = {};
let contacts = [];
let currentMode = 'flowchart';

// --- DOM ELEMENTS ---
const languageSelector = document.getElementById('languageSelector');
const q = document.getElementById('q');
const o = document.getElementById('o');
const r = document.getElementById('r');
const rt = document.getElementById('rt');
const c = document.getElementById('c');
const rs = document.getElementById('rs');
const endBtn = document.getElementById('endBtn');
const flowchartModeBtn = document.getElementById('flowchartModeBtn');
const contactsModeBtn = document.getElementById('contactsModeBtn');
const questionEditorModeBtn = document.getElementById('questionEditorModeBtn');
const preventionModeBtn = document.getElementById('preventionModeBtn');
const flowchartContainer = document.getElementById('flowchartContainer');
const contactsContainer = document.getElementById('contactsContainer');
const questionEditorContainer = document.getElementById('questionEditorContainer');
const preventionContainer = document.getElementById('preventionContainer');
const contactNameInput = document.getElementById('contactName');
const contactPhoneInput = document.getElementById('contactPhone');
const addContactBtn = document.getElementById('addContactBtn');
const contactList = document.getElementById('contactList');
const noContactsMessage = document.getElementById('noContactsMessage');
const resultContacts = document.getElementById('resultContacts');
const resultContactList = document.getElementById('resultContactList');
const noResultContactsMessage = document.getElementById('noResultContactsMessage');
const exportFlowchartBtn = document.getElementById('exportFlowchartBtn');
const importFlowchartBtn = document.getElementById('importFlowchartBtn');
const importFlowchartFile = document.getElementById('importFlowchartFile');
const resetFlowchartBtn = document.getElementById('resetFlowchartBtn');
const selectQuestionToEdit = document.getElementById('selectQuestionToEdit');
const editQuestionForm = document.getElementById('editQuestionForm');
const editQuestionId = document.getElementById('editQuestionId');
const editQuestionText = document.getElementById('editQuestionText');
const editIsResultCheckbox = document.getElementById('editIsResultCheckbox');
const editOptionsContainer = document.getElementById('editOptionsContainer');
const addOptionBtn = document.getElementById('addOptionBtn');
const saveEditedQuestionBtn = document.getElementById('saveEditedQuestionBtn');
const deleteQuestionBtn = document.getElementById('deleteQuestionBtn');
const newQuestionIdInput = document.getElementById('newQuestionId');
const newQuestionTextarea = document.getElementById('newQuestionText');
const newIsResultCheckbox = document.getElementById('newIsResultCheckbox');
const newOptionsContainer = document.getElementById('newOptionsContainer');
const addNewOptionBtn = document.getElementById('addNewOptionBtn');
const saveNewQuestionBtn = document.getElementById('saveNewQuestionBtn');
const reorderQuestionList = document.getElementById('reorderQuestionList');
const heatDangerStatus = document.getElementById('heatDangerStatus');
const heatDangerDetail = document.getElementById('heatDangerDetail');
const refreshHeatDangerBtn = document.getElementById('refreshHeatDangerBtn');
const heatDangerContainer = document.getElementById('heatDangerContainer');

// --- I18N (INTERNATIONALIZATION) FUNCTIONS ---

function getLangString(key, replacements = {}) {
    let text = key.split('.').reduce((obj, i) => obj && obj[i], languageData) || key;
    for (const placeholder in replacements) {
        text = text.replace(`{${placeholder}}`, replacements[placeholder]);
    }
    return text;
}

function applyTranslations() {
    document.title = getLangString('appName');
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        el.textContent = getLangString(el.dataset.langKey);
    });
    document.querySelectorAll('[data-lang-placeholder-key]').forEach(el => {
        el.placeholder = getLangString(el.dataset.langPlaceholderKey);
    });
}

function loadLanguage(lang) {
    if (!allLanguageData[lang]) {
        console.warn(`Language "${lang}" not found. Falling back to 'ja'.`);
        lang = 'ja';
    }

    languageData = allLanguageData[lang];
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    languageSelector.value = lang;

    flowchartData = JSON.parse(localStorage.getItem(`flowchartData_${lang}`)) || languageData.flowchart;
    const storedContacts = JSON.parse(localStorage.getItem('emergencyContacts'));
    contacts = (storedContacts && storedContacts.length > 0) ? storedContacts : languageData.contacts;

    applyTranslations();
    setMode(currentMode, true); 
}

// --- CORE APP LOGIC ---

function setMode(mode, forceRender = false) {
    if (currentMode === mode && !forceRender) {
        return; 
    }
    currentMode = mode;
    [flowchartContainer, contactsContainer, questionEditorContainer, preventionContainer].forEach(container => container.classList.add('hidden'));
    [flowchartModeBtn, contactsModeBtn, questionEditorModeBtn, preventionModeBtn].forEach(btn => {
        btn.classList.remove('bg-[#009945]', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-800');
    });

    const activeBtn = document.getElementById(`${mode}ModeBtn`);
    const activeContainer = document.getElementById(`${mode}Container`);

    if (activeBtn && activeContainer) {
        activeContainer.classList.remove('hidden');
        activeBtn.classList.add('bg-[#009945]', 'text-white');
        activeBtn.classList.remove('bg-gray-200', 'text-gray-800');
    }

    switch (mode) {
        case 'flowchart':
            render('start');
            break;
        case 'contacts':
            renderContacts();
            break;
        case 'questionEditor':
            renderQuestionEditor();
            break;
    }
}

function render(id) {
    const node = flowchartData[id];
    if (!node) {
        q.textContent = getLangString('ui.errorNextNodeNotFound', { id });
        o.innerHTML = '';
        return;
    }

    if (node.isResult) {
        rt.textContent = node.question;
        c.classList.add('hidden');
        r.classList.remove('hidden');
        renderResultContacts();
    } else {
        q.textContent = node.question;
        o.innerHTML = '';
        if (node.options) {
            node.options.forEach(option => {
                const button = document.createElement('button');
                button.className = 'w-full md:w-auto flex-1 bg-white border-2 border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 flex items-center justify-center gap-2';
                const iconSrc = option.icon || '';
                if (iconSrc) {
                    button.innerHTML = `<img src="${iconSrc}" alt="" class="w-8 h-8 rounded-full"><span>${option.text}</span>`;
                } else {
                    button.textContent = option.text;
                }
                button.addEventListener('click', () => render(option.next));
                o.appendChild(button);
            });
        }
        c.classList.remove('hidden');
        r.classList.add('hidden');
        resultContacts.classList.add('hidden');
    }
}

// --- CONTACTS MODE FUNCTIONS ---

function renderContacts() {
    contactList.innerHTML = '';
    noContactsMessage.classList.toggle('hidden', contacts.length > 0);

    contacts.forEach((contact, index) => {
        const contactDiv = document.createElement('div');
        contactDiv.className = 'flex items-center justify-between p-4 mb-3 bg-white rounded-lg shadow-sm border border-gray-200';
        contactDiv.draggable = true;
        contactDiv.dataset.index = index;

        contactDiv.innerHTML = `
            <div>
                <p class="font-semibold text-lg">${contact.name}</p>
                <a href="tel:${contact.phone}" class="text-gray-600 hover:underline">${contact.phone}</a>
            </div>
            <div class="flex gap-2">
                <button class="edit-contact-btn bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600" data-index="${index}">${getLangString('ui.editContactButton')}</button>
                <button class="delete-contact-btn bg-red-500 text-white p-2 rounded-lg hover:bg-red-600" data-index="${index}">${getLangString('ui.deleteContactButton')}</button>
            </div>
        `;
        contactList.appendChild(contactDiv);
    });
    addContactDragListeners();
}

function renderResultContacts() {
    resultContactList.innerHTML = '';
    noResultContactsMessage.classList.toggle('hidden', contacts.length > 0);
    resultContacts.classList.toggle('hidden', contacts.length === 0 && noResultContactsMessage.classList.contains('hidden'));

    contacts.forEach(contact => {
        const listItem = document.createElement('li');
        listItem.className = 'mb-1';
        listItem.innerHTML = `${contact.name}: <a href="tel:${contact.phone}" class="text-[#009945] hover:underline">${contact.phone}</a>`;
        resultContactList.appendChild(listItem);
    });
}

function saveContacts() {
    localStorage.setItem('emergencyContacts', JSON.stringify(contacts));
}

addContactBtn.addEventListener('click', () => {
    const name = contactNameInput.value.trim();
    const phone = contactPhoneInput.value.trim();
    const editingIndex = addContactBtn.dataset.editingIndex;

    if (name && phone) {
        if (editingIndex !== undefined) {
            contacts[parseInt(editingIndex)] = { name, phone };
            delete addContactBtn.dataset.editingIndex;
            addContactBtn.textContent = getLangString('ui.addContactButton');
        } else {
            contacts.push({ name, phone });
        }
        saveContacts();
        contactNameInput.value = '';
        contactPhoneInput.value = '';
        renderContacts();
    } else {
        alert(getLangString('ui.inputNameAndPhone'));
    }
});

contactList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.classList.contains('edit-contact-btn')) {
        const index = parseInt(target.dataset.index);
        const contactToEdit = contacts[index];
        contactNameInput.value = contactToEdit.name;
        contactPhoneInput.value = contactToEdit.phone;
        addContactBtn.textContent = getLangString('ui.saveChangesButton');
        addContactBtn.dataset.editingIndex = index;
    } else if (target.classList.contains('delete-contact-btn')) {
        const index = parseInt(target.dataset.index);
        if (confirm(getLangString('ui.confirmDeleteContact'))) {
            contacts.splice(index, 1);
            saveContacts();
            renderContacts();
            if (addContactBtn.dataset.editingIndex && parseInt(addContactBtn.dataset.editingIndex) === index) {
                delete addContactBtn.dataset.editingIndex;
                addContactBtn.textContent = getLangString('ui.addContactButton');
            }
        }
    }
});

// --- QUESTION EDITOR FUNCTIONS ---

function renderQuestionEditor() {
    populateQuestionSelector();
    editQuestionForm.classList.add('hidden');
    clearEditForm();
    clearNewQuestionForm();
    renderReorderList();
}

function populateQuestionSelector() {
    selectQuestionToEdit.innerHTML = `<option value="">${getLangString('ui.selectQuestionPlaceholder')}</option>`;
    Object.keys(flowchartData).forEach(id => {
        const option = document.createElement('option');
        option.value = id;
        option.textContent = id;
        selectQuestionToEdit.appendChild(option);
    });
}

function loadQuestionForEditing(id) {
    const node = flowchartData[id];
    if (!node) {
        clearEditForm();
        editQuestionForm.classList.add('hidden');
        return;
    }

    editQuestionId.value = id;
    editQuestionText.value = node.question || '';
    editIsResultCheckbox.checked = !!node.isResult;
    toggleOptionsVisibility(!!node.isResult, 'edit');
    editOptionsContainer.innerHTML = '';

    if (!node.isResult && node.options) {
        node.options.forEach(opt => addOptionField(opt.text, opt.next, opt.icon, 'edit'));
    }
}

function addOptionField(text = '', next = '', icon = '', type = 'edit') {
    const container = (type === 'edit') ? editOptionsContainer : newOptionsContainer;
    const optionDiv = document.createElement('div');
    optionDiv.className = 'option-row flex flex-col md:flex-row gap-2 mb-2 p-3 border border-gray-200 rounded-lg bg-white';
    const iconSelectorId = `icon-selector-${Date.now()}-${Math.random()}`;

    optionDiv.innerHTML = `
        <div class="flex-1 flex flex-col gap-2">
            <input type="text" placeholder="${getLangString('ui.optionTextPlaceholder')}" value="${text}" class="option-text w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#009945]">
            <input type="text" placeholder="${getLangString('ui.optionNextPlaceholder')}" value="${next}" class="option-next w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#009945]">
        </div>
        <div class="flex-1 flex flex-col gap-2">
            <label for="${iconSelectorId}" class="text-sm font-semibold text-gray-600">${getLangString('ui.optionIconLabel')}</label>
            <select id="${iconSelectorId}" class="option-icon w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#009945]">
                <option value="">${getLangString('ui.optionIconNone')}</option>
                <option value="good.jpg">good.jpg</option>
                <option value="bad.jpg">bad.jpg</option>
                <option value="confused.jpg">confused.jpg</option>
            </select>
        </div>
        <button class="remove-option-btn bg-red-400 text-white p-2 rounded-md hover:bg-red-500 self-center">${getLangString('ui.deleteContactButton')}</button>
    `;
    container.appendChild(optionDiv);
    optionDiv.querySelector('.option-icon').value = icon;
    optionDiv.querySelector('.remove-option-btn').addEventListener('click', () => optionDiv.remove());
}

function toggleOptionsVisibility(isResult, type) {
    const container = (type === 'edit') ? editOptionsContainer : newOptionsContainer;
    const addButton = (type === 'edit') ? addOptionBtn : addNewOptionBtn;
    if (isResult) {
        container.innerHTML = `<p class="text-gray-600 text-sm italic mb-2">${getLangString('ui.resultNodeInfo')}</p>`;
        addButton.classList.add('hidden');
    } else {
        container.innerHTML = '';
        addButton.classList.remove('hidden');
    }
}

function clearEditForm() {
    editQuestionId.value = '';
    editQuestionText.value = '';
    editIsResultCheckbox.checked = false;
    editOptionsContainer.innerHTML = '';
    selectQuestionToEdit.value = '';
    addOptionBtn.classList.remove('hidden');
}

function clearNewQuestionForm() {
    newQuestionIdInput.value = '';
    newQuestionTextarea.value = '';
    newIsResultCheckbox.checked = false;
    newOptionsContainer.innerHTML = '';
    addNewOptionBtn.classList.remove('hidden');
}

function saveFlowchart() {
    localStorage.setItem(`flowchartData_${currentLanguage}`, JSON.stringify(flowchartData));
}

saveEditedQuestionBtn.addEventListener('click', () => {
    const id = editQuestionId.value.trim();
    const questionText = editQuestionText.value.trim();
    const isResult = editIsResultCheckbox.checked;
    const options = [];

    if (!isResult) {
        editOptionsContainer.querySelectorAll('.option-row').forEach(div => {
            const text = div.querySelector('.option-text').value.trim();
            const next = div.querySelector('.option-next').value.trim();
            const icon = div.querySelector('.option-icon').value.trim();
            if (text && next) options.push({ text, next, icon: icon || undefined });
        });
    }

    if (id && questionText) {
        flowchartData[id] = isResult ? { isResult: true, question: questionText } : { question: questionText, options };
        saveFlowchart();
        alert(getLangString('ui.questionSaved'));
        setMode('flowchart');
    } else {
        alert(getLangString('ui.errorIdAndTextRequired'));
    }
});

saveNewQuestionBtn.addEventListener('click', () => {
    const newId = newQuestionIdInput.value.trim();
    const newText = newQuestionTextarea.value.trim();
    const newIsResult = newIsResultCheckbox.checked;
    const newOptions = [];

    if (!newIsResult) {
        newOptionsContainer.querySelectorAll('.option-row').forEach(div => {
            const text = div.querySelector('.option-text').value.trim();
            const next = div.querySelector('.option-next').value.trim();
            const icon = div.querySelector('.option-icon').value.trim();
            if (text && next) newOptions.push({ text, next, icon: icon || undefined });
        });
    }

    if (newId && newText) {
        if (flowchartData[newId]) {
            alert(getLangString('ui.errorIdExists'));
            return;
        }
        if (!newIsResult && newOptions.length === 0) {
            alert(getLangString('ui.errorNodeNeedsOptions'));
            return;
        }
        flowchartData[newId] = newIsResult ? { isResult: true, question: newText } : { question: newText, options: newOptions };
        saveFlowchart();
        alert(getLangString('ui.newQuestionSaved'));
        setMode('flowchart');
    } else {
        alert(getLangString('ui.errorIdAndTextRequired'));
    }
});

deleteQuestionBtn.addEventListener('click', () => {
    const idToDelete = editQuestionId.value.trim();
    if (idToDelete && confirm(getLangString('ui.confirmDeleteQuestion', { id: idToDelete }))) {
        delete flowchartData[idToDelete];
        saveFlowchart();
        alert(getLangString('ui.questionDeleted'));
        setMode('flowchart');
    }
});

// --- DRAG AND DROP (REORDERING) --- 
function addDragListeners(listElement, onDropCallback) {
    let dragSrcEl = null;

    function handleDragStart(e) {
        dragSrcEl = this;
        this.classList.add('dragging');
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.innerHTML);
    }

    function handleDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const target = e.target.closest(dragSrcEl.tagName);
        if (target && target !== dragSrcEl) {
            const rect = target.getBoundingClientRect();
            const isBefore = e.clientY - rect.top < rect.height / 2;
            listElement.querySelectorAll(dragSrcEl.tagName).forEach(item => item.classList.remove('border-b-2', 'border-t-2', 'border-[#009945]'));
            target.classList.add(isBefore ? 'border-t-2' : 'border-b-2', 'border-[#009945]');
        }
    }

    function handleDragLeave(e) {
        e.target.closest(dragSrcEl.tagName)?.classList.remove('border-b-2', 'border-t-2', 'border-[#009945]');
    }

    function handleDrop(e) {
        e.stopPropagation();
        const dropTarget = e.target.closest(dragSrcEl.tagName);
        if (dragSrcEl && dropTarget && dragSrcEl !== dropTarget) {
            onDropCallback(dragSrcEl, dropTarget);
        }
        dropTarget?.classList.remove('border-b-2', 'border-t-2', 'border-[#009945]');
    }

    function handleDragEnd() {
        this.classList.remove('dragging');
        listElement.querySelectorAll(dragSrcEl.tagName).forEach(item => item.classList.remove('border-b-2', 'border-t-2', 'border-[#009945]'));
    }

    listElement.querySelectorAll('[draggable="true"]').forEach(item => {
        item.addEventListener('dragstart', handleDragStart, false);
        item.addEventListener('dragover', handleDragOver, false);
        item.addEventListener('dragleave', handleDragLeave, false);
        item.addEventListener('drop', handleDrop, false);
        item.addEventListener('dragend', handleDragEnd, false);
    });
}

function addContactDragListeners() {
    addDragListeners(contactList, (dragEl, dropEl) => {
        const dragIndex = parseInt(dragEl.dataset.index);
        const dropIndex = parseInt(dropEl.dataset.index);
        const [removed] = contacts.splice(dragIndex, 1);
        contacts.splice(dropIndex, 0, removed);
        saveContacts();
        renderContacts();
    });
}

function addReorderDragListeners() {
    addDragListeners(reorderQuestionList, (dragEl, dropEl) => {
        const dragId = dragEl.dataset.id;
        const dropId = dropEl.dataset.id;
        const questionIds = Object.keys(flowchartData);
        const dragIndex = questionIds.indexOf(dragId);
        const dropIndex = questionIds.indexOf(dropId);

        if (dragIndex > -1 && dropIndex > -1) {
            const [movedId] = questionIds.splice(dragIndex, 1);
            questionIds.splice(dropIndex, 0, movedId);
            const newFlowchartData = {};
            questionIds.forEach(id => { newFlowchartData[id] = flowchartData[id]; });
            flowchartData = newFlowchartData;
            saveFlowchart();
            renderReorderList();
            populateQuestionSelector();
        }
    });
}

function renderReorderList() {
    reorderQuestionList.innerHTML = '';
    const questionIds = Object.keys(flowchartData);
    questionIds.forEach((id, index) => {
        const li = document.createElement('li');
        li.className = 'flex items-center justify-between p-3 mb-2 bg-white rounded-lg shadow-sm border border-gray-200';
        li.draggable = true;
        li.dataset.id = id;
        li.innerHTML = `
            <span class="font-semibold">${id}</span>
            <div class="flex gap-2">
                <button class="reorder-up-btn bg-gray-400 text-white p-2 rounded-md hover:bg-gray-500" ${index === 0 ? 'disabled' : ''}>▲</button>
                <button class="reorder-down-btn bg-gray-400 text-white p-2 rounded-md hover:bg-gray-500" ${index === questionIds.length - 1 ? 'disabled' : ''}>▼</button>
            </div>
        `;
        reorderQuestionList.appendChild(li);
    });
    addReorderDragListeners();
}

reorderQuestionList.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;
    const li = button.closest('li');
    const questionId = li.dataset.id;
    const questionIds = Object.keys(flowchartData);
    const currentIndex = questionIds.indexOf(questionId);
    let newIndex = -1;

    if (button.classList.contains('reorder-up-btn') && currentIndex > 0) newIndex = currentIndex - 1;
    else if (button.classList.contains('reorder-down-btn') && currentIndex < questionIds.length - 1) newIndex = currentIndex + 1;

    if (newIndex !== -1) {
        const [movedId] = questionIds.splice(currentIndex, 1);
        questionIds.splice(newIndex, 0, movedId);
        const newFlowchartData = {};
        questionIds.forEach(id => { newFlowchartData[id] = flowchartData[id]; });
        flowchartData = newFlowchartData;
        saveFlowchart();
        renderReorderList();
        populateQuestionSelector();
    }
});

// --- DATA MANAGEMENT (IMPORT/EXPORT/RESET) ---

exportFlowchartBtn.addEventListener('click', () => {
    const dataStr = JSON.stringify(flowchartData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `flowchart_data_${currentLanguage}.json`;
    a.click();
    URL.revokeObjectURL(url);
});

importFlowchartBtn.addEventListener('click', () => importFlowchartFile.click());

importFlowchartFile.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);
                if (confirm(getLangString('ui.confirmOverwriteFlowchart'))) {
                    flowchartData = importedData;
                    saveFlowchart();
                    alert(getLangString('ui.flowchartImported'));
                    setMode('flowchart');
                }
            } catch (error) {
                alert(getLangString('ui.errorImportingFile'));
            }
        };
        reader.readAsText(file);
    }
});

resetFlowchartBtn.addEventListener('click', () => {
    if (confirm(getLangString('ui.confirmResetFlowchart'))) {
        flowchartData = languageData.flowchart; 
        saveFlowchart();
        alert(getLangString('ui.flowchartReset'));
        setMode('flowchart');
    }
});

// --- HEAT DANGER FUNCTIONS ---

async function getHeatDanger() {
    heatDangerStatus.textContent = getLangString('ui.heatDangerStatusLoadingLocation');
    heatDangerDetail.textContent = '';

    if (!navigator.geolocation) {
        heatDangerStatus.textContent = getLangString('ui.heatDangerStatusLocationError');
        return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        heatDangerStatus.textContent = getLangString('ui.heatDangerStatusLoadingWeather');

        try {
            // Use the 'current' parameter for more direct and robust data fetching
            const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m`);
            if (!weatherResponse.ok) throw new Error('Weather API failed');
            const weatherData = await weatherResponse.json();

            // Directly access current temperature and humidity
            const temp = weatherData.current.temperature_2m;
            const humidity = weatherData.current.relative_humidity_2m;

            // Ensure we have valid numbers before proceeding
            if (typeof temp !== 'number' || typeof humidity !== 'number') {
                throw new Error('Invalid weather data received');
            }

            let address = getLangString('ui.heatDangerAddressError');
            try {
                const geoResponse = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=${currentLanguage}`);
                if (geoResponse.ok) {
                    const geoData = await geoResponse.json();
                    address = geoData.display_name || address;
                }
            } catch (geoError) {
                console.error("Geocoding error:", geoError);
            }
            heatDangerDetail.textContent = address;
            const wbgt = 0.735 * temp + 0.0374 * humidity + 0.00292 * temp * humidity - 4.06;
            updateHeatDangerUI(temp, humidity, wbgt);

        } catch (error) {
            console.error("Heat danger fetch error:", error); // Log the actual error for debugging
            heatDangerStatus.textContent = getLangString('ui.heatDangerStatusWeatherError');
        }
    }, (error) => {
        let errorKey;
        switch(error.code) {
            case error.PERMISSION_DENIED: errorKey = 'ui.heatDangerStatusLocationPermissionDenied'; break;
            case error.POSITION_UNAVAILABLE: errorKey = 'ui.heatDangerStatusLocationUnavailable'; break;
            case error.TIMEOUT: errorKey = 'ui.heatDangerStatusLocationTimeout'; break;
            default: errorKey = 'ui.heatDangerStatusUnknownError'; break;
        }
        heatDangerStatus.textContent = getLangString(errorKey);
    });
}

function updateHeatDangerUI(temp, humidity, wbgt) {
    let statusKey, statusColor, iconHTML = '';
    heatDangerContainer.classList.remove('bg-red-100');

    if (wbgt < 25) { statusKey = 'ui.heatDangerLevelAttention'; statusColor = 'text-yellow-600'; }
    else if (wbgt < 28) { statusKey = 'ui.heatDangerLevelWarning'; statusColor = 'text-orange-600'; }
    else if (wbgt < 31) { statusKey = 'ui.heatDangerLevelSevereWarning'; statusColor = 'text-red-600'; iconHTML = `<img src="bad.jpg" alt="Warning" class="w-6 h-6 inline-block mr-2">`; heatDangerContainer.classList.add('bg-red-100'); }
    else { statusKey = 'ui.heatDangerLevelDanger'; statusColor = 'text-purple-800'; iconHTML = `<img src="bad.jpg" alt="Danger" class="w-6 h-6 inline-block mr-2">`; heatDangerContainer.classList.add('bg-red-100'); }

    heatDangerStatus.innerHTML = iconHTML + getLangString(statusKey);
    heatDangerStatus.className = `text-2xl font-bold ${statusColor}`;

    document.getElementById('tempDisplay').textContent = getLangString('ui.heatDangerCurrentTemp', { temp: temp.toFixed(1) });
    document.getElementById('humidityDisplay').textContent = getLangString('ui.heatDangerCurrentHumidity', { humidity: humidity.toFixed(0) });
    document.getElementById('wbgtDisplay').textContent = getLangString('ui.heatDangerCurrentWBGT', { wbgt: wbgt.toFixed(1) });
}

// --- EVENT LISTENERS & INITIALIZATION ---

flowchartModeBtn.addEventListener('click', () => setMode('flowchart'));
contactsModeBtn.addEventListener('click', () => setMode('contacts'));
questionEditorModeBtn.addEventListener('click', () => setMode('questionEditor'));
preventionModeBtn.addEventListener('click', () => setMode('prevention'));
rs.addEventListener('click', () => render('start'));
endBtn.addEventListener('click', () => setMode('flowchart'));
selectQuestionToEdit.addEventListener('change', (e) => {
    if (e.target.value) {
        loadQuestionForEditing(e.target.value);
        editQuestionForm.classList.remove('hidden');
    } else {
        editQuestionForm.classList.add('hidden');
    }
});
editIsResultCheckbox.addEventListener('change', () => toggleOptionsVisibility(editIsResultCheckbox.checked, 'edit'));
newIsResultCheckbox.addEventListener('change', () => toggleOptionsVisibility(newIsResultCheckbox.checked, 'new'));
addOptionBtn.addEventListener('click', () => addOptionField('', '', '', 'edit'));
addNewOptionBtn.addEventListener('click', () => addOptionField('', '', '', 'new'));
languageSelector.addEventListener('change', (e) => loadLanguage(e.target.value));
refreshHeatDangerBtn.addEventListener('click', getHeatDanger);

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js')
            .then(reg => console.log('Service Worker registered', reg))
            .catch(err => console.log('Service Worker registration failed', err));
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'ja';
    loadLanguage(preferredLanguage);
    getHeatDanger();
});