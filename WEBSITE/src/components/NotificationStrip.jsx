const notifications = [
  '📢 Admissions 2026-27: Applications now open for B.Tech, M.Tech, MBA and Ph.D programs',
  '🏆 NIT Patna ranked among top 50 engineering institutes in NIRF 2025',
  '📋 End Semester Examination Schedule Released — Check Examination Portal',
  '🎓 Convocation 2026: Registration open for graduating students',
  '💼 Placement Drive: Top companies visiting campus in March 2026',
];

const NotificationStrip = () => {
  return (
    <div className="notification-strip text-white py-1.5 overflow-hidden relative">
      <div className="flex items-center">
        <span className="bg-white text-burnt-700 text-xs font-bold px-3 py-0.5 rounded-r-full z-10 shrink-0 shadow-md">
          UPDATES
        </span>
        <div className="overflow-hidden whitespace-nowrap flex-1 ml-3">
          <div className="inline-block animate-marquee">
            {notifications.map((note, idx) => (
              <span key={idx} className="text-sm mx-8">
                {note}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationStrip;
