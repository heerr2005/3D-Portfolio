import Spline from '@splinetool/react-spline';

const SplineBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10">
      <Spline
        scene="https://prod.spline.design/Amxwl5w7Izvw78wk/scene.splinecode"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
      <style>{`
        /* Hide Spline watermark */
        #spline-watermark,
        .spline-watermark,
        [class*="watermark"],
        a[href*="spline.design"],
        a[href*="spline"],
        div[style*="position: absolute"][style*="bottom"],
        canvas + div,
        iframe + div {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
          width: 0 !important;
          height: 0 !important;
          overflow: hidden !important;
        }
      `}</style>
    </div>
  );
};

export default SplineBackground;
