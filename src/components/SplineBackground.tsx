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
        a[href*="spline.design"] {
          display: none !important;
          opacity: 0 !important;
          visibility: hidden !important;
          pointer-events: none !important;
        }
      `}</style>
    </div>
  );
};

export default SplineBackground;
