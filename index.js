// ====== NAVIGATION HANDLING ======
const navButtons = document.querySelectorAll('.nav-btn');
const navButtons2 = document.querySelectorAll('.nav-btn-2');
const allNavContents = document.querySelectorAll('.nav-content');

// Function to show target section with fade transition
function showSection(targetId) {
  allNavContents.forEach(content => {
    if (content.id === targetId.substring(1)) {
      content.classList.add('active', 'fade-in');
      content.style.display = 'block';
      setTimeout(() => content.style.opacity = '1', 50);
    } else {
      content.style.opacity = '0';
      setTimeout(() => {
        content.classList.remove('active', 'fade-in');
        content.style.display = 'none';
      }, 400);
    }
  });
}

// Desktop nav buttons
navButtons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    showSection(targetId);
  });
});

// Mobile nav buttons
navButtons2.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = button.getAttribute('data-target');
    hideSidebar();
    showSection(targetId);
  });
});

// ====== SIDEBAR TOGGLE ======
function showSidebar() {
  const sidebar = document.querySelector('.navbar2');
  sidebar.style.display = 'flex';
  sidebar.classList.add('slide-in');
}

function hideSidebar() {
  const sidebar = document.querySelector('.navbar2');
  sidebar.classList.remove('slide-in');
  setTimeout(() => (sidebar.style.display = 'none'), 300);
}

// ====== INITIAL LOAD ======
// Show Home section by default
document.addEventListener('DOMContentLoaded', () => {
  showSection('#nav1');
});