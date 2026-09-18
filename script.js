// Tiny touches: download counter + smooth count-up for stats.
(function () {
  // Count-up animation for hero stats
  document.querySelectorAll('.stats b').forEach(function (el) {
    var target = parseInt(el.textContent, 10);
    if (isNaN(target)) return;
    var cur = 0, step = Math.max(1, Math.ceil(target / 20));
    var t = setInterval(function () {
      cur += step;
      if (cur >= target) { cur = target; clearInterval(t); }
      el.textContent = cur;
    }, 60);
  });

  // Friendly confirm before big APK downloads
  document.querySelectorAll('a[href$=".apk"]').forEach(function (a) {
    a.addEventListener('click', function () {
      console.log('Downloading: ' + a.getAttribute('href'));
    });
  });

  console.log('%c🍬 KartickApps', 'font-size:16px;font-weight:bold');
})();
