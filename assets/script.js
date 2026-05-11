document.addEventListener('DOMContentLoaded', function () {

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileSidebar = document.querySelector('.sidebar');
  const sidebarOverlay = document.getElementById('sidebar-overlay');
  
  if (mobileMenuBtn && mobileSidebar && sidebarOverlay) {
  
    mobileMenuBtn.addEventListener('click', function () {
      mobileSidebar.classList.toggle('mobile-open');
      sidebarOverlay.classList.toggle('active');
    });
  
    sidebarOverlay.addEventListener('click', function () {
      mobileSidebar.classList.remove('mobile-open');
      sidebarOverlay.classList.remove('active');
    });
  
  }
  
  });

const overlay = document.getElementById('modal-overlay');

document.getElementById('new-req-btn').addEventListener('click', () => {
  overlay.classList.add('open');
});

document.getElementById('modal-close').addEventListener('click', () => {
  overlay.classList.remove('open');
});

document.getElementById('modal-cancel').addEventListener('click', () => {
  overlay.classList.remove('open');
});

document.getElementById('modal-submit').addEventListener('click', () => {
  overlay.classList.remove('open');
});

// click outside to close
overlay.addEventListener('click', (e) => {
  if (e.target === overlay) {
    overlay.classList.remove('open');
  }
});


document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.getElementById('modal-overlay').classList.remove('open');
    }
  });

  const toggleBtn = document.getElementById('menu-toggle');
  const sidebar = document.getElementById('sidebar');
  const overlaySidebar = document.getElementById('sidebar-overlay');
  
  toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlaySidebar.classList.toggle('active');
  });
  
  // close on overlay click
  overlaySidebar.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlaySidebar.classList.remove('active');
  }); 

  