// Default flowchart data
const defaultFlowchartData = {"start":{"question":"熱中症を疑う症状があるか。\n例：めまい、失神、筋肉痛、筋肉の硬直、大量の発汗、頭痛、不快感、吐き気、嘔吐、倦怠感、虚脱感、意識障害、けいれん、手足の運動障害、高体温その他異常","options":[{"text":"ある","next":"ある場合","icon":"良い時.jpg"},{"text":"ない","next":"ない場合","icon":"きつい時.jpg"}]},"ある場合":{"question":"呼びかけには応じるか。\n","options":[{"text":"応じる","next":"応じる場合","icon":"良い時.jpg"},{"text":"応じない","next":"応じない場合","icon":"きつい時.jpg"},{"text":"曖昧","next":"曖昧な場合、自力で水分補給不可能","icon":"どうして.jpg"}]},"応じない場合":{"isResult":true,"question":"1．直ちに救急車を呼ぶこと。\n2.涼しい場所への避難、服をゆるめ身体を冷やすこと。\n3.重篤な場合は溺れないよう配慮しつつ直接水をかけるなど、とにかく冷やすこと。"},"ない場合":{"isResult":true,"question":"一瞬でも熱中症かな？と感じたらすぐ身体を冷やして休憩しましょう。"},"応じる場合":{"question":"涼しい場所へ避難しつつ、水分を自力で接種できるか。","options":[{"text":"自力で水分補給可能","next":"自力で水分補給可能な場合","icon":"良い時.jpg"},{"text":"自力で水分補給不可能","next":"曖昧な場合、自力で水分補給不可能","icon":"きつい時.jpg"}]},"曖昧な場合、自力で水分補給不可能":{"isResult":true,"question":"1.救急車を呼ぶことも視野に入れ、原則医療機関へ向かうこと。\n2.涼しい場所への避難、服をゆるめ身体を冷やすこと。\n"},"自力で水分補給可能な場合":{"question":"そのまま安静にして十分に休息を取り、その日の作業は休むこと。\n※一人にしないこと。もしくは数十分に一度程度様子を伺うこと。\n経過は良いですか？","options":[{"text":"良い","next":"帰ろう","icon":"良い時.jpg"},{"text":"変わらない、あるいは悪化した","next":"救急車","icon":"きつい時.jpg"}]},"救急車":{"isResult":true,"question":"熱中症の疑いが高いです。医療機関へ向かってください。"},"帰ろう":{"isResult":true,"question":"今日は無理せず家に帰って安静にしましょう。ご安全に！"}}

// Load flowchart data from local storage, or use default if not found
let flowchartData = JSON.parse(localStorage.getItem('flowchartData')) || defaultFlowchartData;

// Get DOM elements for flowchart mode
const q = document.getElementById('q');
const o = document.getElementById('o');
const r = document.getElementById('r');
const rt = document.getElementById('rt');
const c = document.getElementById('c');
const rs = document.getElementById('rs');
const endBtn = document.getElementById('endBtn');

// Get DOM elements for mode switching
const flowchartModeBtn = document.getElementById('flowchartModeBtn');
const contactsModeBtn = document.getElementById('contactsModeBtn');
const questionEditorModeBtn = document.getElementById('questionEditorModeBtn');
const preventionModeBtn = document.getElementById('preventionModeBtn');
const flowchartContainer = document.getElementById('flowchartContainer');
const contactsContainer = document.getElementById('contactsContainer');
const questionEditorContainer = document.getElementById('questionEditorContainer');
const preventionContainer = document.getElementById('preventionContainer');

// Get DOM elements for contacts mode
const contactNameInput = document.getElementById('contactName');
const contactPhoneInput = document.getElementById('contactPhone');
const addContactBtn = document.getElementById('addContactBtn');
const contactList = document.getElementById('contactList');
const noContactsMessage = document.getElementById('noContactsMessage');
const resultContacts = document.getElementById('resultContacts');
const resultContactList = document.getElementById('resultContactList');
const noResultContactsMessage = document.getElementById('noResultContactsMessage');

// Get DOM elements for question editor mode
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

let currentMode = 'flowchart'; // Track current mode
let draggedItem = null; // For drag and drop reordering

// Function to switch modes
function setMode(mode) {
    currentMode = mode;
    // Reset all containers and button styles
    [flowchartContainer, contactsContainer, questionEditorContainer, preventionContainer].forEach(container => container.classList.add('hidden'));
    [flowchartModeBtn, contactsModeBtn, questionEditorModeBtn, preventionModeBtn].forEach(btn => {
        btn.classList.remove('bg-[#009945]', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-800');
    });

    // Set active mode
    if (mode === 'flowchart') {
        flowchartContainer.classList.remove('hidden');
        flowchartModeBtn.classList.remove('bg-gray-200', 'text-gray-800');
        flowchartModeBtn.classList.add('bg-[#009945]', 'text-white');
        render('start'); // Initialize flowchart when switching back
    } else if (mode === 'contacts') {
        contactsContainer.classList.remove('hidden');
        contactsModeBtn.classList.remove('bg-gray-200', 'text-gray-800');
        contactsModeBtn.classList.add('bg-[#009945]', 'text-gray-800');
        renderContacts(); // Render contacts when switching to contacts mode
    } else if (mode === 'questionEditor') {
        questionEditorContainer.classList.remove('hidden');
        questionEditorModeBtn.classList.remove('bg-gray-200', 'text-gray-800');
        questionEditorModeBtn.classList.add('bg-[#009945]', 'text-white');
                renderQuestionEditor(); // Render question editor
            } else if (mode === 'prevention') {
                preventionContainer.classList.remove('hidden');
                preventionModeBtn.classList.remove('bg-gray-200', 'text-gray-800');
                preventionModeBtn.classList.add('bg-[#009945]', 'text-white');
            }
}

// Function to render the flowchart
function render(id) {
    const node = flowchartData[id];
    if (!node) {
        q.textContent = 'エラー: 次の項目が見つかりません (' + id + ')。質問編集モードで存在するか確認してください。';
        o.innerHTML = '';
        return;
    }

    // If it's a result
    if (node.isResult) {
        rt.textContent = node.question;
        c.classList.add('hidden');
        r.classList.remove('hidden');
        // Display contacts on the result screen
        renderResultContacts();
    } else { // If it's a question
        q.textContent = node.question;
        o.innerHTML = '';
        if (node.options) {
            node.options.forEach(option => {
                const button = document.createElement('button');
                button.className = 'w-full md:w-auto flex-1 bg-white border-2 border-gray-300 text-gray-700 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 flex items-center justify-center gap-2';
                
                const iconSrc = option.icon || '';
                const optionText = option.text;

                if (iconSrc) {
                    button.innerHTML = `<img src="${iconSrc}" alt="" class="w-8 h-8 rounded-full"><span>${optionText}</span>`;
                } else {
                    button.textContent = optionText;
                }

                button.addEventListener('click', () => render(option.next));
                o.appendChild(button);
            });
        }
        c.classList.remove('hidden');
        r.classList.add('hidden');
        resultContacts.classList.add('hidden'); // Hide contacts on non-result screen
    }
}

// Contact data (loaded from local storage)
const defaultContactsData = [{"name":"甲田　収","phone":"080-8986-0443"},{"name":"三戸内科","phone":"086-229-3331"}];

// Load contacts from local storage
let contacts = JSON.parse(localStorage.getItem('emergencyContacts'));

// If no contacts are stored or the list is empty, use the default data
if (!contacts || contacts.length === 0) {
    contacts = defaultContactsData;
}

// Function to render contacts in the contacts mode
function renderContacts() {
    contactList.innerHTML = ''; // Clear existing list
    if (contacts.length === 0) {
        noContactsMessage.classList.remove('hidden');
    } else {
        noContactsMessage.classList.add('hidden');
        contacts.forEach((contact, index) => {
            const contactDiv = document.createElement('div');
            contactDiv.className = 'flex items-center justify-between p-4 mb-3 bg-white rounded-lg shadow-sm border border-gray-200';
            contactDiv.draggable = true; // Make draggable
            contactDiv.dataset.index = index; // Store original index

            contactDiv.innerHTML = `
                <div>
                    <p class="font-semibold text-lg">${contact.name}</p>
                    <a href="tel:${contact.phone}" class="text-gray-600 hover:underline">${contact.phone}</a>
                </div>
                <div class="flex gap-2">
                    <button class="edit-contact-btn bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600" data-index="${index}">編集</button>
                    <button class="delete-contact-btn bg-red-500 text-white p-2 rounded-lg hover:bg-red-600" data-index="${index}">削除</button>
                </div>
            `;
            contactList.appendChild(contactDiv);
        });
        addContactDragListeners(); // Add drag/drop listeners after rendering
    }
}

// Function to render contacts on the result screen
function renderResultContacts() {
    resultContactList.innerHTML = ''; // Clear existing list
    if (contacts.length === 0) {
        noResultContactsMessage.classList.remove('hidden');
        resultContacts.classList.remove('hidden'); // Show container even if no contacts
    } else {
        noResultContactsMessage.classList.add('hidden');
        contacts.forEach(contact => {
            const listItem = document.createElement('li');
            listItem.className = 'mb-1';
            listItem.innerHTML = `${contact.name}: <a href="tel:${contact.phone}" class="text-[#009945] hover:underline">${contact.phone}</a>`;
            resultContactList.appendChild(listItem);
        });
        resultContacts.classList.remove('hidden'); // Show the container
    }
}

// Function to add a contact
addContactBtn.addEventListener('click', () => {
    const name = contactNameInput.value.trim();
    const phone = contactPhoneInput.value.trim();

    if (name && phone) {
        contacts.push({ name, phone });
        localStorage.setItem('emergencyContacts', JSON.stringify(contacts)); // Save to local storage
        contactNameInput.value = '';
        contactPhoneInput.value = '';
        renderContacts(); // Update list
    } else {
        console.log('名前と電話番号を入力してください。');
        // Optionally, add a simple UI message here instead of console.log
    }
});

// Function to edit a contact (event delegation)
contactList.addEventListener('click', (event) => {
    if (event.target.classList.contains('edit-contact-btn')) {
        const index = parseInt(event.target.dataset.index);
        const contactToEdit = contacts[index];
        if (contactToEdit) {
            // Populate the add/edit form with the existing contact data
            contactNameInput.value = contactToEdit.name;
            contactPhoneInput.value = contactToEdit.phone;
            // Change add button to save edit button temporarily
            addContactBtn.textContent = '変更を保存';
            addContactBtn.dataset.editingIndex = index; // Store index for saving
        }
    } else if (event.target.classList.contains('delete-contact-btn')) {
        const index = parseInt(event.target.dataset.index);
        if (confirm('この連絡先を削除しますか？')) {
            contacts.splice(index, 1); // Remove from array
            localStorage.setItem('emergencyContacts', JSON.stringify(contacts)); // Update local storage
            renderContacts(); // Update list
            // Reset add button if deleting the contact being edited
            if (addContactBtn.dataset.editingIndex && parseInt(addContactBtn.dataset.editingIndex) === index) {
                delete addContactBtn.dataset.editingIndex;
                addContactBtn.textContent = '連絡先を追加';
            }
        }
    }
});

// Save edited contact or add new
addContactBtn.addEventListener('click', () => {
    const name = contactNameInput.value.trim();
    const phone = contactPhoneInput.value.trim();
    const editingIndex = addContactBtn.dataset.editingIndex;

    if (name && phone) {
        if (editingIndex !== undefined) {
            // Editing existing contact
            contacts[parseInt(editingIndex)] = { name, phone };
            delete addContactBtn.dataset.editingIndex;
            addContactBtn.textContent = '連絡先を追加';
        } else {
            // Adding new contact
            contacts.push({ name, phone });
        }
        localStorage.setItem('emergencyContacts', JSON.stringify(contacts));
        contactNameInput.value = '';
        contactPhoneInput.value = '';
        renderContacts();
    } else {
        console.log('名前と電話番号を入力してください。');
    }
});

// Drag and Drop for Contacts
let dragSrcEl = null;

function handleDragStart(e) {
    e.target.classList.add('dragging');
    dragSrcEl = e.target;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
}

function handleDragOver(e) {
    e.preventDefault(); // Necessary to allow drop
    e.dataTransfer.dropEffect = 'move';
    const target = e.target.closest('.flex.items-center'); // Find the draggable item
    if (target && target !== dragSrcEl && target.classList.contains('p-4')) {
        // Determine if we are dragging over before or after the target
        const rect = target.getBoundingClientRect();
        const offsetY = e.clientY - rect.top;
        const isBefore = offsetY < rect.height / 2;

        const currentList = contactList.querySelectorAll('.flex.items-center');
        currentList.forEach(item => item.classList.remove('border-b-2', 'border-t-2', 'border-[#009945]'));

        if (isBefore) {
            target.classList.add('border-t-2', 'border-[#009945]');
        } else {
            target.classList.add('border-b-2', 'border-[#009945]');
        }
    }
}

function handleDragLeave(e) {
    e.target.classList.remove('border-b-2', 'border-t-2', 'border-[#009945]');
}

function handleDrop(e) {
    e.stopPropagation(); // Stops some browsers from redirecting.
    e.target.classList.remove('border-b-2', 'border-t-2', 'border-[#009945]');

    if (dragSrcEl !== e.target && dragSrcEl && e.target.closest('.flex.items-center')) {
        const dropTarget = e.target.closest('.flex.items-center');
        const dragIndex = parseInt(dragSrcEl.dataset.index);
        const dropIndex = parseInt(dropTarget.dataset.index);

        // Reorder contacts array
        const [removed] = contacts.splice(dragIndex, 1);
        contacts.splice(dropIndex, 0, removed);

        localStorage.setItem('emergencyContacts', JSON.stringify(contacts));
        renderContacts(); // Re-render the list
    }
}

function handleDragEnd(e) {
    this.classList.remove('dragging');
    const currentList = contactList.querySelectorAll('.flex.items-center');
    currentList.forEach(item => item.classList.remove('border-b-2', 'border-t-2', 'border-[#009945]'));
}

function addContactDragListeners() {
    const items = contactList.querySelectorAll('.flex.items-center');
    items.forEach(item => {
        item.addEventListener('dragstart', handleDragStart, false);
        item.addEventListener('dragover', handleDragOver, false);
        item.addEventListener('dragleave', handleDragLeave, false);
        item.addEventListener('drop', handleDrop, false);
        item.addEventListener('dragend', handleDragEnd, false);
    });
}


// --- Question Editor Functions ---

// Render the question editor UI
function renderQuestionEditor() {
    populateQuestionSelector();
    editQuestionForm.classList.add('hidden'); // Hide form until a question is selected
    clearEditForm(); // Clear any previous data
    clearNewQuestionForm(); // Clear new question form on mode switch
    renderReorderList(); // Render the list for reordering questions
}

// Populate the select dropdown with existing question IDs
function populateQuestionSelector() {
    selectQuestionToEdit.innerHTML = '<option value="">質問を選択してください</option>';
    // Get keys in the order they are currently in the flowchartData object
    // If order matters for editing, we might need a separate ordered list of keys
    Object.keys(flowchartData).forEach(id => {
        const option = document.createElement('option');
        option.value = id;
        option.textContent = id;
        selectQuestionToEdit.appendChild(option);
    });
}

// Load selected question into the edit form
selectQuestionToEdit.addEventListener('change', (event) => {
    const questionId = event.target.value;
    if (questionId) {
        loadQuestionForEditing(questionId);
        editQuestionForm.classList.remove('hidden');
    } else {
        editQuestionForm.classList.add('hidden');
        clearEditForm();
    }
});

function loadQuestionForEditing(id) {
    const node = flowchartData[id];
    if (!node) {
        console.error('エラー: 質問が見つかりません:', id);
        clearEditForm();
        editQuestionForm.classList.add('hidden');
        return;
    }

    editQuestionId.value = id;
    editQuestionText.value = node.question || '';
    editIsResultCheckbox.checked = !!node.isResult; // Set checkbox state

    // Dynamically show/hide options based on isResult status
    toggleOptionsVisibility(editIsResultCheckbox.checked, 'edit');

    // Clear existing options before populating
    editOptionsContainer.innerHTML = '';

    // Populate options if it's not a result node
    if (!node.isResult && node.options) {
        node.options.forEach((option) => {
            addOptionField(option.text, option.next, option.icon, 'edit');
        });
    }
}

// Add an option input field for editing or new question
function addOptionField(text = '', next = '', icon = '', type = 'edit') {
    const container = (type === 'edit') ? editOptionsContainer : newOptionsContainer;

    const optionDiv = document.createElement('div');
    optionDiv.className = 'option-row flex flex-col md:flex-row gap-2 mb-2 p-3 border border-gray-200 rounded-lg bg-white';
    
    const iconSelectorId = `icon-selector-${Date.now()}-${Math.random()}`;

    optionDiv.innerHTML = `
        <div class="flex-1 flex flex-col gap-2">
            <input type="text" placeholder="選択肢テキスト" value="${text}" class="option-text w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#009945]">
            <input type="text" placeholder="次の質問ID" value="${next}" class="option-next w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#009945]">
        </div>
        <div class="flex-1 flex flex-col gap-2">
            <label for="${iconSelectorId}" class="text-sm font-semibold text-gray-600">アイコン:</label>
            <select id="${iconSelectorId}" class="option-icon w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#009945]">
                <option value="">なし</option>
                <option value="良い時.jpg">良い時.jpg</option>
                <option value="きつい時.jpg">きつい時.jpg</option>
                <option value="どうして.jpg">どうして.jpg</option>
            </select>
        </div>
        <button class="remove-option-btn bg-red-400 text-white p-2 rounded-md hover:bg-red-500 self-center">削除</button>
    `;
    container.appendChild(optionDiv);

    // Set the selected icon
    const iconSelect = optionDiv.querySelector('.option-icon');
    if (icon) {
        iconSelect.value = icon;
    }

    // Add event listener for remove button
    optionDiv.querySelector('.remove-option-btn').addEventListener('click', () => {
        optionDiv.remove();
    });
}

// Toggle visibility of option fields based on isResult checkbox
function toggleOptionsVisibility(isResult, type) {
    const container = (type === 'edit') ? editOptionsContainer : newOptionsContainer;
    const addButton = (type === 'edit') ? addOptionBtn : addNewOptionBtn;

    if (isResult) {
        container.innerHTML = '<p class="text-gray-600 text-sm italic mb-2">このノードは結果ノードなので、選択肢はありません。</p>';
        addButton.classList.add('hidden');
    } else {
        container.innerHTML = ''; // Clear message
        addButton.classList.remove('hidden');
    }
}

// Event listener for editIsResultCheckbox
editIsResultCheckbox.addEventListener('change', () => {
    toggleOptionsVisibility(editIsResultCheckbox.checked, 'edit');
});

// Event listener for newIsResultCheckbox
newIsResultCheckbox.addEventListener('change', () => {
    toggleOptionsVisibility(newIsResultCheckbox.checked, 'new');
});


// Clear the edit question form
function clearEditForm() {
    editQuestionId.value = '';
    editQuestionText.value = '';
    editIsResultCheckbox.checked = false;
    editOptionsContainer.innerHTML = '';
    selectQuestionToEdit.value = ''; // Reset dropdown
    addOptionBtn.classList.remove('hidden'); // Ensure add option button is visible
}

// Clear the new question form
function clearNewQuestionForm() {
    newQuestionIdInput.value = '';
    newQuestionTextarea.value = '';
    newIsResultCheckbox.checked = false;
    newOptionsContainer.innerHTML = '';
    addNewOptionBtn.classList.remove('hidden'); // Ensure add new option button is visible
}

// Save edited question
saveEditedQuestionBtn.addEventListener('click', () => {
    const id = editQuestionId.value.trim();
    const questionText = editQuestionText.value.trim();
    const isResult = editIsResultCheckbox.checked;
    const options = [];

    if (!isResult) { // Only collect options if it's not a result node
        const optionElements = editOptionsContainer.querySelectorAll('.option-row');
        optionElements.forEach(optionDiv => {
            const text = optionDiv.querySelector('.option-text').value.trim();
            const next = optionDiv.querySelector('.option-next').value.trim();
            const icon = optionDiv.querySelector('.option-icon').value.trim();
            if (text && next) {
                options.push({ text, next, icon: icon || undefined });
            }
        });
    }

    if (id && questionText) {
        if (isResult) {
            flowchartData[id] = { isResult: true, question: questionText };
        } else {
            flowchartData[id] = { question: questionText, options: options.length > 0 ? options : undefined };
        }
        localStorage.setItem('flowchartData', JSON.stringify(flowchartData));
        console.log('質問が保存されました:', flowchartData[id]);
        alert('質問が正常に保存されました！'); // Simple alert for confirmation
        setMode('flowchart'); // Go back to flowchart mode after saving
    } else {
        alert('質問IDと質問文/提案文は必須です。');
    }
});

// Add option field for editing
addOptionBtn.addEventListener('click', () => addOptionField('', '', '', 'edit'));

// Delete question
deleteQuestionBtn.addEventListener('click', () => {
    const idToDelete = editQuestionId.value.trim();
    if (idToDelete && confirm(`本当に質問 '${idToDelete}' を削除しますか？`)) {
        delete flowchartData[idToDelete];
        localStorage.setItem('flowchartData', JSON.stringify(flowchartData));
        alert('質問が削除されました！');
        setMode('flowchart'); // Go back to flowchart mode after deleting
    }
});


// Add option field for new question
addNewOptionBtn.addEventListener('click', () => addOptionField('', '', '', 'new'));

// Save new question
saveNewQuestionBtn.addEventListener('click', () => {
    const newId = newQuestionIdInput.value.trim();
    const newText = newQuestionTextarea.value.trim();
    const newIsResult = newIsResultCheckbox.checked;
    const newOptions = [];

    if (!newIsResult) { // Only collect options if it's not a result node
        const newOptionElements = newOptionsContainer.querySelectorAll('.option-row');
        newOptionElements.forEach(optionDiv => {
            const text = optionDiv.querySelector('.option-text').value.trim();
            const next = optionDiv.querySelector('.option-next').value.trim();
            const icon = optionDiv.querySelector('.option-icon').value.trim();
            if (text && next) {
                newOptions.push({ text, next, icon: icon || undefined });
            }
        });
    }

    if (newId && newText) {
        if (flowchartData[newId]) {
            alert('この質問IDは既に存在します。別のIDを使用してください。');
            return;
        }
        
        if (newIsResult) {
            flowchartData[newId] = { isResult: true, question: newText };
        } else {
            if (newOptions.length === 0) {
                 alert('質問ノードには少なくとも1つの選択肢が必要です。または、結果ノードとして保存してください。');
                 return;
            }
            flowchartData[newId] = { question: newText, options: newOptions };
        }

        localStorage.setItem('flowchartData', JSON.stringify(flowchartData));
        console.log('新しい質問が保存されました:', flowchartData[newId]);
        alert('新しい質問が正常に保存されました！');
        setMode('flowchart'); // Go back to flowchart mode after saving
    } else {
        alert('質問IDと質問文/提案文は必須です。');
    }
});

// --- Flowchart Management Functions ---

// Export flowchart data
exportFlowchartBtn.addEventListener('click', () => {
    const dataStr = JSON.stringify(flowchartData, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'flowchart_data.json';
    document.body.appendChild(a);
a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
});

// Import flowchart data
importFlowchartBtn.addEventListener('click', () => {
    importFlowchartFile.click(); // Trigger file input click
});

importFlowchartFile.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedData = JSON.parse(e.target.result);
                if (confirm('現在のフローチャートデータを上書きしますか？')) {
                    flowchartData = importedData;
                    localStorage.setItem('flowchartData', JSON.stringify(flowchartData));
                    alert('フローチャートデータがインポートされました！');
                    setMode('flowchart'); // Go back to flowchart mode after import
                }
            } catch (error) {
                alert('JSONファイルの読み込みまたは解析に失敗しました。');
                console.error('Import error:', error);
            }
        };
        reader.readAsText(file);
    }
});

// Reset flowchart data to default
resetFlowchartBtn.addEventListener('click', () => {
    if (confirm('フローチャートデータを初期状態にリセットしますか？この操作は元に戻せません。')) {
        flowchartData = JSON.parse(JSON.stringify(defaultFlowchartData)); // Deep copy default data
        localStorage.setItem('flowchartData', JSON.stringify(flowchartData));
        alert('フローチャートデータがリセットされました！');
        setMode('flowchart'); // Go back to flowchart mode
    }
});

// --- Question Reordering Functions ---
function renderReorderList() {
    reorderQuestionList.innerHTML = '';
    const questionIds = Object.keys(flowchartData);
    
    questionIds.forEach((id, index) => {
        const listItem = document.createElement('li');
        listItem.className = 'flex items-center justify-between p-3 mb-2 bg-white rounded-lg shadow-sm border border-gray-200';
        listItem.draggable = true;
        listItem.dataset.id = id; // Store the question ID

        listItem.innerHTML = `
            <span class="font-semibold">${id}</span>
            <div class="flex gap-2">
                <button class="reorder-up-btn bg-gray-400 text-white p-2 rounded-md hover:bg-gray-500" data-id="${id}" ${index === 0 ? 'disabled' : ''}>▲</button>
                <button class="reorder-down-btn bg-gray-400 text-white p-2 rounded-md hover:bg-gray-500" data-id="${id}" ${index === questionIds.length - 1 ? 'disabled' : ''}>▼</button>
            </div>
        `;
        reorderQuestionList.appendChild(listItem);
    });

    addReorderDragListeners(); // Add drag/drop listeners for questions
}

// Reorder buttons (up/down)
reorderQuestionList.addEventListener('click', (event) => {
    const button = event.target.closest('button');
    if (!button) return;

    const questionId = button.dataset.id;
    const questionIds = Object.keys(flowchartData);
    const currentIndex = questionIds.indexOf(questionId);

    let newIndex = -1;
    if (button.classList.contains('reorder-up-btn') && currentIndex > 0) {
        newIndex = currentIndex - 1;
    } else if (button.classList.contains('reorder-down-btn') && currentIndex < questionIds.length - 1) {
        newIndex = currentIndex + 1;
    }

    if (newIndex !== -1) {
        const [movedId] = questionIds.splice(currentIndex, 1);
        questionIds.splice(newIndex, 0, movedId);
        
        // Create a new ordered flowchartData object
        const newFlowchartData = {};
        questionIds.forEach(id => {
            newFlowchartData[id] = flowchartData[id];
        });
        flowchartData = newFlowchartData;
        localStorage.setItem('flowchartData', JSON.stringify(flowchartData));
        renderReorderList(); // Re-render the reorder list
        populateQuestionSelector(); // Update the edit selector
    }
});

// Drag and Drop for Questions
let draggedQuestionItem = null;

function handleQuestionDragStart(e) {
    e.target.classList.add('dragging');
    draggedQuestionItem = e.target;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', e.target.dataset.id); // Set data to transfer (question ID)
}

function handleQuestionDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
    const target = e.target.closest('li');
    if (target && target !== draggedQuestionItem && target.dataset.id) {
        const rect = target.getBoundingClientRect();
        const offsetY = e.clientY - rect.top;

        const currentList = reorderQuestionList.querySelectorAll('li');
        currentList.forEach(item => item.classList.remove('border-b-2', 'border-t-2', 'border-[#009945]'));

        if (offsetY < rect.height / 2) {
            target.classList.add('border-t-2', 'border-[#009945]');
        } else {
            target.classList.add('border-b-2', 'border-[#009945]');
        }
    }
}

function handleQuestionDragLeave(e) {
    e.target.closest('li')?.classList.remove('border-b-2', 'border-t-2', 'border-[#009945]');
}

function handleQuestionDrop(e) {
    e.stopPropagation();
    const dropTarget = e.target.closest('li');
    dropTarget?.classList.remove('border-b-2', 'border-t-2', 'border-[#009945]');

    if (draggedQuestionItem && dropTarget && draggedQuestionItem !== dropTarget) {
        const dragId = draggedQuestionItem.dataset.id;
        const dropId = dropTarget.dataset.id;

        const questionIds = Object.keys(flowchartData);
        const dragIndex = questionIds.indexOf(dragId);
        const dropIndex = questionIds.indexOf(dropId);

        if (dragIndex > -1 && dropIndex > -1) {
            const [movedId] = questionIds.splice(dragIndex, 1);
            questionIds.splice(dropIndex, 0, movedId);

            const newFlowchartData = {};
            questionIds.forEach(id => {
                newFlowchartData[id] = flowchartData[id];
            });
            flowchartData = newFlowchartData;
            localStorage.setItem('flowchartData', JSON.stringify(flowchartData));
            renderReorderList(); // Re-render the reorder list
            populateQuestionSelector(); // Update the edit selector
        }
    }
}

function handleQuestionDragEnd(e) {
    this.classList.remove('dragging');
    const currentList = reorderQuestionList.querySelectorAll('li');
    currentList.forEach(item => item.classList.remove('border-b-2', 'border-t-2', 'border-[#009945]'));
    draggedQuestionItem = null;
}

function addReorderDragListeners() {
    const items = reorderQuestionList.querySelectorAll('li');
    items.forEach(item => {
        item.addEventListener('dragstart', handleQuestionDragStart, false);
        item.addEventListener('dragover', handleQuestionDragOver, false);
        item.addEventListener('dragleave', handleQuestionDragLeave, false);
        item.addEventListener('drop', handleDrop, false);
        item.addEventListener('dragend', handleQuestionDragEnd, false);
    });
}


// --- Heat Danger Functions ---

// Function to get the heat danger level
async function getHeatDanger() {
    heatDangerStatus.textContent = '位置情報を取得中...';
    heatDangerDetail.textContent = '';

    if (!navigator.geolocation) {
        heatDangerStatus.textContent = '位置情報が利用できません';
        return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        heatDangerStatus.textContent = '天気情報を取得中...';

        try {
            // Using Open-Meteo API
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }
            const weatherData = await response.json();
            const temp = weatherData.current_weather.temperature;

            // Fetch address using reverse geocoding
            try {
                const geoResponse = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&accept-language=ja`);
                if (geoResponse.ok) {
                    const geoData = await geoResponse.json();
                    let address = '住所が取得できませんでした';
                    if (geoData && geoData.address) {
                        const adr = geoData.address;
                        const addressParts = [
                            adr.state, // 都道府県
                            adr.city || adr.town || adr.village, // 市町村
                            adr.county, // 郡
                            adr.city_district, // 政令指定都市の区
                            adr.suburb, // 町丁目
                            adr.road, // 道路
                            adr.house_number // 番地
                        ].filter(p => p); // nullやundefinedを除外

                        // 日本の住所では地名が重複することがあるため、重複を除去
                        const uniqueAddressParts = [...new Set(addressParts)];
                        address = uniqueAddressParts.join(' ');
                    } else if (geoData && geoData.display_name) {
                        address = geoData.display_name; // addressオブジェクトがない場合の予備
                    }
                    heatDangerDetail.textContent = `現在地: ${address}`;
                } else {
                    heatDangerDetail.textContent = '住所の取得に失敗しました';
                }
            } catch (geoError) {
                console.error("Geocoding error:", geoError);
                heatDangerDetail.textContent = '住所の取得中にエラーが発生しました';
            }
            
            updateHeatDangerUI(temp);

        } catch (error) {
            console.error("Error fetching weather data:", error);
            heatDangerStatus.textContent = '天気情報の取得に失敗';
            heatDangerDetail.textContent = '時間をおいて再度お試しください。';
        }
    }, (error) => {
        console.error("Geolocation error:", error);
        heatDangerStatus.textContent = '位置情報の取得に失敗';
        switch(error.code) {
            case error.PERMISSION_DENIED:
                heatDangerDetail.textContent = "位置情報の利用が許可されていません。";
                break;
            case error.POSITION_UNAVAILABLE:
                heatDangerDetail.textContent = "現在地を特定できませんでした。";
                break;
            case error.TIMEOUT:
                heatDangerDetail.textContent = "位置情報の取得がタイムアウトしました。";
                break;
            default:
                heatDangerDetail.textContent = "不明なエラーが発生しました。";
                break;
        }
    });
}

// Function to update the UI with the heat danger level
function updateHeatDangerUI(temp) {
    let statusText = '';
    let statusColor = '';
    let iconHTML = '';

    // Reset background color
    heatDangerContainer.classList.remove('bg-red-100');

    if (temp < 28) {
        statusText = '注意';
        statusColor = 'text-yellow-600';
    } else if (temp < 31) {
        statusText = '警戒';
        statusColor = 'text-orange-600';
    } else if (temp < 35) {
        statusText = '厳重警戒';
        statusColor = 'text-red-600';
        iconHTML = `<img src="きつい時.jpg" alt="警告" class="w-6 h-6 inline-block mr-2">`;
        heatDangerContainer.classList.add('bg-red-100');
    } else {
        statusText = '危険';
        statusColor = 'text-purple-800';
        iconHTML = `<img src="きつい時.jpg" alt="危険" class="w-6 h-6 inline-block mr-2">`;
        heatDangerContainer.classList.add('bg-red-100');
    }

    heatDangerStatus.innerHTML = iconHTML + statusText;
    heatDangerStatus.className = `text-2xl font-bold ${statusColor}`;
    const currentDetail = heatDangerDetail.textContent;
    heatDangerDetail.innerHTML = `${currentDetail}<br>(現在の推定気温: ${temp}°C)`;
}


// Set up main event listeners
rs.addEventListener('click', () => {
    render('start');
});

endBtn.addEventListener('click', () => {
    setMode('flowchart'); // Resets to the initial flowchart state.
});

flowchartModeBtn.addEventListener('click', () => setMode('flowchart'));
contactsModeBtn.addEventListener('click', () => setMode('contacts'));
questionEditorModeBtn.addEventListener('click', () => setMode('questionEditor'));
preventionModeBtn.addEventListener('click', () => setMode('prevention'));
refreshHeatDangerBtn.addEventListener('click', getHeatDanger);

// Initial rendering (start with flowchart mode)
setMode('flowchart');
getHeatDanger(); // Get heat danger on initial load
