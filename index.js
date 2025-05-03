
const shareBtn = document.querySelector('.share-btn');
const sharePanel = document.querySelector('.share-panel');
const profile = document.querySelector('.profile-content');
const profileImg = document.querySelector('.profile-img');

shareBtn.addEventListener('click', () => {
    sharePanel.classList.toggle('active');
    profile.classList.toggle('hidden');
    profileImg.classList.toggle('hidden');
    shareBtn.classList.toggle('edit');
});

