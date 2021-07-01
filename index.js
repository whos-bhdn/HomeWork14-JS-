// Завдання 2
// Необхідно реалізувати наступний функціонал як на відео signUp, 
// а саме:
// •	заповнити всі поля форми: first name, second name, email
// •	вибрати стать: man, woman
// •	вибрати position: Fronted, Backend, QC/QA
// •	поставити галочку навпроти пункту: I agree…
// •	після чого клікаємо на кнопку Sign Up і переходимо до блоку 
// профайлу користувача (примітка: без галочки напроти I agree… 
//    кнопка має бути не активна)
// •	на блоці профайлу має бути вся інформація яку ми заповнювали, 
// а також картинка чоловіча чи жіноча відносно статі яку ми 
// обирали
// •	при кліку на Sign Out ми повертаємося на блок створення 
// акаунту, поля в блоці мають бути зачищені

let button = document.querySelector('.button');
let containerProf = document.querySelector('.content')

button.addEventListener('click', () => {
   let divProfile = document.createElement('div');
   divProfile.classList.add('screen');
   divProfile.append(containerProf);
})