'use strict';

const model = [{
    picture: "https://clck.ru/NLWJA",
    name: 'AAAAA',
    article: 'A12',
    count: 88,
    price: 100,
    creationDate: '2020-01-07',
    priceSegment: 'cheap',
    description: [
        `wwwwwwww wwwwwwwwww`
    ],
},
{
    picture: 'https://clck.ru/NLWJA',
    name: 'BBBBB',
    article: 'A23',
    count: 185,
    price: 110,
    creationDate: '2020-01-05',
    priceSegment: 'cheap',
    description: null,
},
{
    picture: 'https://clck.ru/NaPUn',
    name: 'CCCCC',
    article: 'A33',
    count: 77,
    price: 120,
    creationDate: '2020-01-06',
    priceSegment: 'optimal',
    description: [
        `wwwwwwww wwwwwwwwww`
    ],
},
{
    picture: 'https://clck.ru/NaPKF',
    name: 'DDDDD',
    article: 'A48',
    count: 1,
    price: 130,
    creationDate: '2020-01-04',
    priceSegment: 'premium',
    description: null,
},
{
    picture: "https://clck.ru/NaPKF",
    name: 'EEEEE',
    article: 'A57',
    count: 1,
    price: 140,
    creationDate: '2020-01-08',
    priceSegment: 'premium',
    description: [
        `wwwwwwww wwwwwwwwww`
    ],
},
];

const clearForm = (form) => {
    for (let input of form.elements) {
        if (input.type === 'submit') continue;
        input.value = '';
        formData.picture = '';
        formData.nameInput = '';
        formData.articleInput = '';
        formData.countInput = '';
        formData.priceInput = '';
        formData.creationDate = '';
        formData.checkbox = '';
        formData.description = '';
    };
};

const clearSegmentFilter = (segmentFilter) => {
    for (let input of segmentFilter.elements) {
        formData.isCheap = '';
        formData.isOptimal = '';
        formData.isPremium = '';
    };
};

const appendElement = (position, htmlElemnt, id = null) => {
    const elem = document.createElement(htmlElemnt);
    elem.id = id;
    position.append(elem);
};

const appendInput = (form, type, id, labelText) => {
    const inputContainer = document.createElement('div');

    const input = document.createElement('input');
    input.setAttribute('type', type);
    input.id = id;

    if (labelText) {
        const labelTextForInput = document.createElement('labelText');
        labelTextForInput.setAttribute('for', id);
        labelTextForInput.innerText = labelText;
        inputContainer.append(labelTextForInput);
    };
    inputContainer.append(input);

    const validationContainer = document.createElement('div');
    validationContainer.classList.add('validation');
    inputContainer.append(validationContainer);

    form.append(inputContainer);
};

appendElement(document.body, 'div', 'content');

appendElement(content, 'form', 'mainForm');
mainForm.classList.add('mainForm');

appendElement(content, 'div', 'cardsContainer');
cardsContainer.classList.add('cardsContainer');

appendElement(mainForm, 'fieldSet', 'mainInfo');
appendElement(mainInfo, 'legend');
mainInfo.children[0].innerText = 'Main information';

appendInput(mainInfo, 'text', 'nameInput', 'Name');
nameInput.placeholder = 'Product';
nameInput.required = 'true';

appendInput(mainInfo, 'text', 'articleInput', 'Article');
articleInput.placeholder = 'A12';
articleInput.required = 'true';

appendInput(mainInfo, 'number', 'countInput', 'Сount');
countInput.placeholder = '1...';
countInput.min = '1';
countInput.required = 'true';

appendInput(mainInfo, 'number', 'priceInput', 'Price');
priceInput.placeholder = 'number';
priceInput.min = '1';
priceInput.required = 'true';

appendInput(mainInfo, 'date', 'creationDate', 'Creation date');
creationDate.required = 'true';

appendElement(mainForm, 'fieldSet', 'priceSegment');
appendElement(priceSegment, 'legend');
priceSegment.children[0].innerText = 'Price segment';

appendInput(priceSegment, 'radio', 'cheap', 'Cheap');
cheap.setAttribute('checked', 'true');
cheap.name = 'priceSegment';
cheap.required = 'true';

appendInput(priceSegment, 'radio', 'optimal', 'Optimal');
optimal.name = 'priceSegment';

appendInput(priceSegment, 'radio', 'premium', 'Premium');
premium.name = 'priceSegment';

appendElement(mainForm, 'fieldSet', 'secondaryInfo');
appendElement(secondaryInfo, 'legend');
secondaryInfo.children[0].innerText = 'Secondary information';

appendInput(secondaryInfo, 'text', 'picture', 'Picture');
picture.placeholder = "https://clck.ru/NLWJA";

appendElement(secondaryInfo, 'div', 'labelForDesc');
labelForDesc.innerText = 'Description';

appendElement(secondaryInfo, 'textarea', 'description');
description.innerHTML = "https://clck.ru/Naesg";

appendElement(mainForm, 'button', 'submitButton');
submitButton.innerText = 'Submit';
submitButton.classList.add('submitButton');

appendElement(mainForm, 'form', 'searchForm');
appendElement(searchForm, 'fieldSet', 'search');
appendElement(search, 'legend');
search.children[0].innerText = 'Search';
appendInput(search, 'text', 'searchInput', 'Search product');

appendElement(searchForm, 'fieldSet', 'segmentFilter');
appendElement(segmentFilter, 'legend');
segmentFilter.children[0].innerText = 'Filter by price segment';

appendInput(segmentFilter, 'checkbox', 'isCheap', 'Cheap');
isCheap.setAttribute('checked', 'true');
appendInput(segmentFilter, 'checkbox', 'isOptimal', 'Optimal');
isOptimal.setAttribute('checked', 'true');
appendInput(segmentFilter, 'checkbox', 'isPremium', 'Premium');
isPremium.setAttribute('checked', 'true');

appendElement(searchForm, 'fieldSet', 'sortBy');
appendElement(sortBy, 'legend');
sortBy.children[0].innerText = 'Sort by';

appendInput(sortBy, 'radio', 'byAlphabet', 'Alphabet');
byAlphabet.name = 'sortBy';
byAlphabet.setAttribute('checked', 'true');
appendInput(sortBy, 'radio', 'byPrice', 'Price');
byPrice.name = 'sortBy';
appendInput(sortBy, 'radio', 'byCount', 'Count');
byCount.name = 'sortBy';
appendInput(sortBy, 'radio', 'byDate', 'Date');
byDate.name = 'sortBy';

nameInput.addEventListener('input', event => {
    if (event.target.value.length < 5) {
        nameInput.parentElement.children[1].classList.add('borderValidation');
        nameInput.parentElement.children[2].innerText =
            'The name must contain more five characters';
        submitButton.setAttribute('disabled', 'true');
    } else {
        nameInput.parentElement.children[1].classList.remove('borderValidation');
        nameInput.parentElement.children[2].innerText = '';
        submitButton.removeAttribute('disabled');
    };
});

articleInput.addEventListener('input', event => {
    let splitArticleInput = event.target.value.split('');
    if (splitArticleInput[0] > 'Z' || isNaN(splitArticleInput[1]) || isNaN(splitArticleInput[2])) {
        articleInput.parentElement.children[1].classList.add('borderValidation');
        articleInput.parentElement.children[2].innerText =
            '"Article" must begin with a single uppercase letter, and further contain at least two digits.';
        submitButton.setAttribute('disabled', 'true');
    } else {
        articleInput.parentElement.children[1].classList.remove('borderValidation');
        articleInput.parentElement.children[2].innerText = '';
        submitButton.removeAttribute('disabled');
    };
});

priceInput.addEventListener('input', event => {
    if (isNaN(event.target.value)) {
        priceInput.parentElement.children[2].innerText =
            'The "number" should not have a value less than one;';
    } else {
        priceInput.parentElement.children[2].innerText = '';
    };
});

let formData = {};
let inputObject = {};

function addInputInFormData(form) {
    for (let input of form.elements) {
        if (input.type === 'submit') continue
        if (input.type === 'radio') {
            input.addEventListener('change', event => {
                formData[input.id] = event.target.checked;
            });
            continue
        };

        input.addEventListener('change', event => {
            formData[input.id] = event.target.value;
            inputObject.picture = formData.picture;
            inputObject.name = formData.nameInput;
            inputObject.article = formData.articleInput;
            inputObject.count = formData.countInput;
            inputObject.price = formData.priceInput;
            inputObject.date = formData.creationDate;
            inputObject.description = formData.description;

            function getValueRadio() {
                let cheapId = document.getElementById('cheap');
                let optimalId = document.getElementById('optimal');
                let premiumId = document.getElementById('premium');
                if (cheapId.checked) inputObject.priceSegment = 'cheap';
                if (optimalId.checked) inputObject.priceSegment = 'optimal';
                if (premiumId.checked) inputObject.priceSegment = 'premium';
            };
            getValueRadio()
        });
    };
    return inputObject;
};
addInputInFormData(mainInfo);
addInputInFormData(priceSegment);
addInputInFormData(secondaryInfo);

let setView = (arr = model) => {

    cardsContainer.innerHTML = '';

    for (let item of arr) {
        let elementContainer = document.createElement('div');
        let namePicture = document.createElement('div');
        if (item.picture === null || item.picture === undefined || item.picture === '') {
            namePicture.innerHTML = 'No image'
        } else {
            namePicture.innerHTML = `<image src = ${item.picture} height = 150px width = 250px>`
        };
        elementContainer.append(namePicture);

        let nameContainer = document.createElement('div');
        nameContainer.innerHTML = `Name: ${item.name}`;
        elementContainer.append(nameContainer);
        let nameArticle = document.createElement('div');
        nameArticle.innerHTML = `Article: ${item.article}`;
        elementContainer.append(nameArticle);

        let nameCount = document.createElement('div');
        if (item.count == '1') {
            nameCount.innerHTML = `Count: <i><b>1 Last one<b/></i>`;
            nameCount.style.color = 'red';
        } else {
            nameCount.innerHTML = `Count: ${item.count}`;
        };
        elementContainer.append(nameCount);

        let namePrice = document.createElement('div');
        namePrice.innerHTML = `Price: ${item.price}`;
        elementContainer.append(namePrice);

        let nameDate = document.createElement('div');
        if (item.creationDate) {
            nameDate.innerHTML = `Date: ${item.creationDate}`;
        } else {
            nameDate.innerHTML = `Date: ${formData.creationDate}`;
        };
        elementContainer.append(nameDate);

        const editButton = document.createElement('input');
        editButton.type = 'button';
        editButton.value = 'Edit';
        editButton.classList.add('buttonEdit');
        elementContainer.append(editButton);

        editButton.addEventListener('click', (event) => {

            editButton.classList.toggle('blockNone');

            const popup = document.createElement('div');
            if (item.priceSegment === 'cheap') popup.classList.add('cheapStyle');
            if (item.priceSegment === 'optimal') popup.classList.add('optimalStyle');
            if (item.priceSegment === 'premium') popup.classList.add('premiumStyle');
            popup.classList.add('popup');
            elementContainer.prepend(popup);

            appendInput(popup, 'text', 'changeLink', 'Img link');
            changeLink.placeholder = 'https://clck.ru/NLWJA';
            appendInput(popup, 'text', 'changeName', 'Name');
            changeName.placeholder = 'At least 5 characters';
            appendInput(popup, 'text', 'changeArticle', 'Article');
            changeArticle.placeholder = 'A23';
            appendInput(popup, 'number', 'changeCount', 'Count');
            changeCount.placeholder = 'number';
            changeCount.min = '1';
            appendInput(popup, 'number', 'changePrice', 'Price');
            changePrice.placeholder = 'number';
            changePrice.min = '1';

            const buttonSave = document.createElement('button');
            buttonSave.classList.add('buttonSave');
            buttonSave.innerText = 'Save';
            popup.append(buttonSave);

            const buttonDelete = document.createElement('button');
            buttonDelete.classList.add('buttonDelete');
            buttonDelete.innerText = 'Delete';
            popup.append(buttonDelete);

            const buttonCollectionAllPopup = popup.querySelectorAll('button');
            const buttonSavePopup = buttonCollectionAllPopup[0];
            const buttonDelitePopup = buttonCollectionAllPopup[1];

            buttonDelitePopup.addEventListener('click', function () {
                popup.remove();
                elementContainer.remove();
            });

            changeLink.value = item.picture;
            changeName.value = item.name;
            changeArticle.value = item.article;
            changeCount.value = item.count;
            changePrice.value = item.price;

            changeName.addEventListener('input', (event) => {
                let changeNameEnter = event.target.value.length;
                if (changeNameEnter < 5) {
                    changeName.parentElement.children[2].innerText =
                        'At least 5 characters';
                    buttonSavePopup.setAttribute('disabled', 'true');
                    changeName.classList.add('borderValidation');
                } else {
                    changeName.parentElement.children[2].innerText = '';
                    changeName.innerText = '';
                    changeName.classList.remove('borderValidation');
                    buttonSavePopup.removeAttribute('disabled');
                };
            });

            changeArticle.addEventListener('input', event => {
                let changeArticleEnter = event.target.value.split('');
                if (changeArticleEnter[0] > 'Z' || isNaN(changeArticleEnter[1]) ||
                    isNaN(
                        changeArticleEnter[2])) {
                    changeArticle.parentElement.children[2].innerText =
                        'Input format A23';
                    buttonSavePopup.setAttribute('disabled', 'true');
                    changeArticle.classList.add('borderValidation');
                } else {
                    changeArticle.parentElement.children[2].innerText = '';
                    changeArticle.innerText = '';
                    changeArticle.classList.remove('borderValidation');
                    buttonSavePopup.removeAttribute('disabled');
                };
            });

            changeCount.addEventListener('input', event => {
                let changeCountEnter = event.target.value.split('');
                let resultOfChecking = changeCount.value % 1 == 0 ? 'whole' : ' fractional';
                if (resultOfChecking === ' fractional') {
                    changeCount.parentElement.children[2].innerText =
                        'Enter an integer';
                    buttonSavePopup.setAttribute('disabled', 'true');
                    changeCount.classList.add('borderValidation');
                } else {
                    changeCount.parentElement.children[2].innerText = '';
                    changeCount.innerText = '';
                    changeCount.classList.remove('borderValidation');
                    buttonSavePopup.removeAttribute('disabled');
                };
            });

            buttonSavePopup.addEventListener('click', function () {
                item.picture = changeLink.value;
                item.name = changeName.value;
                item.article = changeArticle.value;
                item.count = changeCount.value;
                item.price = changePrice.value;
                item.creationDate = '2020-05-24';
                setView();
            });
        });

        if (item.priceSegment === 'cheap') elementContainer.classList.add('cheapStyle');
        if (item.priceSegment === 'optimal') elementContainer.classList.add('optimalStyle');
        if (item.priceSegment === 'premium') elementContainer.classList.add('premiumStyle');

        cardsContainer.append(elementContainer);
        document.body.append(cardsContainer);

        let contentDescription = document.createElement('div');
        if (item.description === null || item.description === undefined) {
            contentDescription.innerHTML = '';
        } else {
            contentDescription.innerHTML = `<i>${item.description}</i>`;

            let buttonDescription = document.createElement('button');
            buttonDescription.innerText = 'Description';
            buttonDescription.classList.add('buttonDescription');
            elementContainer.append(buttonDescription);

            buttonDescription.onclick = function () {
                elementContainer.append(contentDescription);
                contentDescription.classList.toggle('blockNone');
            };
        };
    };
};

let getCheckboxAndInputValues = () => {
    let checkboxValues = {};
    for (let item of segmentFilter.elements) {
        checkboxValues[item.id] = item.checked;
    };
    for (let item of sortBy.elements) {
        checkboxValues[item.id] = item.checked;
    };
    return checkboxValues;
};

for (let item of segmentFilter.elements) {
    item.addEventListener('input', (event) => {
        let checkboxState = getCheckboxAndInputValues(segmentFilter);
        if (!checkboxState.isCheap && !checkboxState.isOptimal && !checkboxState.isPremium) {
            setView();
        } else {
            let filteredCards = model.filter(item => {
                return ((checkboxState.isCheap ? item.priceSegment == 'cheap' : false) ||
                    (checkboxState.isOptimal ? item.priceSegment == 'optimal' : false) ||
                    (checkboxState.isPremium ? item.priceSegment == 'premium' : false));
            });
            setView(filteredCards);
            for (let item of sortBy.elements) {
                item.addEventListener('change', (event) => {

                    if (byAlphabet.checked) {
                        const output = filteredCards.sort((a, b) => {
                            return a.name > b.name ? 1 : -1;
                        });
                        setView(output);
                    };

                    if (byPrice.checked) {
                        const output = filteredCards.sort((a, b) => {
                            return b.price - a.price;
                        });
                        setView(output);
                    };

                    if (byCount.checked) {
                        const output = filteredCards.sort((a, b) => {
                            return b.count - a.count;
                        });
                        setView(output);
                    };

                    if (byDate.checked) {
                        const output = filteredCards.sort((a, b) => {
                            a = new Date(a.creationDate);
                            b = new Date(b.creationDate);
                            if (a < b)
                                return -1;
                        });
                        setView(output);
                    };
                });
            };
            searchInput.addEventListener('input', (event) => {
                const filteredListArray = filteredCards.filter(item => {
                    return item.name.toLowerCase().startsWith(event.target.value
                        .toLowerCase());
                });
                setView(filteredListArray);
            });
        };
    });
};

for (let item of sortBy.elements) {

    item.addEventListener('input', (event) => {
        if (byAlphabet.checked) {
            const output = model.sort((a, b) => {
                return a.name > b.name ? 1 : -1;
            });
            setView(output);
        };

        if (byPrice.checked) {
            const output = model.sort((a, b) => {
                return b.price - a.price;
            });
            setView(output);
        };

        if (byCount.checked) {
            const output = model.sort((a, b) => {
                return b.count - a.count;
            });
            setView(output);
        };

        if (byDate.checked) {
            const output = model.sort((a, b) => {
                a = a.creationDate;
                b = b.creationDate;
                if (a < b)
                    return -1;
            });
            setView(output);
        };
        searchInput.addEventListener('input', (event) => {
            const filteredListArray = model.filter(item => {
                return item.name.toLowerCase().startsWith(event.target
                    .value
                    .toLowerCase());
            });
            setView(filteredListArray);
        });
    });
};

for (let item of sortBy.elements) {
    searchInput.addEventListener('input', (event) => {
        const filteredListArray = model.filter(item => {
            return item.name.toLowerCase().startsWith(event.target.value
                .toLowerCase());
        });
        setView(filteredListArray);
    });
};

setView(model);

mainForm.addEventListener('submit', (event) => {
    event.preventDefault();

    model.unshift(inputObject);
    inputObject = {};

    setView(model);
    clearForm(event.target);
});