export function sprite() {

    const svgFigure = 'M421.184 59.212C470.952 91.2285 516.284 138.462 528.012 193.302C540.058 248.144 518.502 310.592 486.486 367.97C454.468 425.347 411.674 477.018 360.32 488.747C308.966 500.159 248.736 470.995 190.724 445.952C132.714 420.592 76.604 399.353 42.0511 357.192C7.8151 315.031 -4.8649 251.63 3.0601 189.498C10.6681 127.05 38.8811 65.8695 85.48 33.218C132.396 0.566994 197.698 -3.55401 257.294 3.10299C317.208 9.75999 371.414 27.1955 421.184 59.212Z';
    const svgWaveBottom = 'M-423.855 -87L-372.067 -69.0775C-320.278 -51.825 -216.701 -14.975 -113.124 29.0775C-9.5462 73.8 94.0311 127.4 197.608 127.4C301.186 127.4 404.763 73.8 508.34 55.8775C611.918 38.625 715.495 55.375 819.072 73.8C922.65 92.225 1026.23 108.975 1129.8 82.6775C1233.38 55.375 1336.96 -14.975 1440.54 11.3225C1544.11 38.625 1647.69 162.575 1751.27 189.878C1854.85 216.175 1958.42 145.825 2010.21 109.477L2062 73.8V449H2010.21C1958.42 449 1854.85 449 1751.27 449C1647.69 449 1544.11 449 1440.54 449C1336.96 449 1233.38 449 1129.8 449C1026.23 449 922.65 449 819.072 449C715.495 449 611.918 449 508.34 449C404.763 449 301.186 449 197.608 449C94.0311 449 -9.5462 449 -113.124 449C-216.701 449 -320.278 449 -372.067 449H-423.855V-87Z';
    const svgWaveTp = 'M-512 227L-460.211 209.078C-408.423 191.825 -304.845 154.975 -201.268 110.923C-97.6908 66.2 5.88654 12.6 109.464 12.6C213.041 12.6 316.618 66.2 420.196 84.1225C523.773 101.375 627.35 84.625 730.928 66.2C834.505 47.775 938.082 31.025 1041.66 57.3225C1145.24 84.625 1248.81 154.975 1352.39 128.677C1455.97 101.375 1559.55 -22.575 1663.12 -49.8775C1766.7 -76.175 1870.28 -5.82501 1922.07 30.5225L1973.86 66.2V-309H1922.07C1870.28 -309 1766.7 -309 1663.12 -309C1559.55 -309 1455.97 -309 1352.39 -309C1248.81 -309 1145.24 -309 1041.66 -309C938.082 -309 834.505 -309 730.928 -309C627.35 -309 523.773 -309 420.196 -309C316.618 -309 213.041 -309 109.464 -309C5.88654 -309 -97.6908 -309 -201.268 -309C-304.845 -309 -408.423 -309 -460.211 -309H-512V227Z';

    function initSvg(sName, name, svgW, svgH, svgVBW, svgVBH, svgColor, svgLeft, svgRight, svgTop, svgBottom, svgRotate, svgScale, svgBG) {

        let container = document.querySelector(`${sName}`),
            collector = document.createElement('figure'),
            svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
            fan = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        container.appendChild(collector);
        collector.className = `${name}`;
        collector.appendChild(svg);
        svg.setAttribute('style', `max-width:${svgW};max-height:${svgH}`);
        svg.setAttribute('viewBox', `0 0 ${svgVBW} ${svgVBH}`);
        svg.setAttribute('fill', 'none');
        svg.style.position = 'absolute';
        svg.style.top = svgTop;
        svg.style.right = svgRight;
        svg.style.bottom = svgBottom
        svg.style.left = svgLeft;
        svg.style.transform = `scale(${svgScale}) rotate(${svgRotate}deg)`;
        svg.style.zIndex = -1;
        fan.setAttribute('d', svgBG);
        fan.setAttribute('style', `fill:${svgColor};`);
        svg.appendChild(fan);
    };

    // Title H4
    initSvg('header h4 .__figure', 'svg-figure-dims', '32.99', '35.79', '532', '492', '#FFDBB4', '-1rem', '', '-0.5rem', '', 90, 1, svgFigure);
    initSvg('.__collection h4 .__figure', 'svg-figure-dims', '32.99', '35.79', '532', '492', '#FFDBB4', '-1rem', '', '-0.5rem', '', 90, 1, svgFigure);
    initSvg('.__rarity h4 .__figure', 'svg-figure-dims', '32.99', '35.79', '532', '492', '#FF8961', '-1rem', '', '-0.5rem', '', 90, 1, svgFigure);
    initSvg('.__releases h4 .__figure', 'svg-figure-dims', '32.99', '35.79', '532', '492', '#F7859C', '-1rem', '', '-0.5rem', '', 90, 1, svgFigure);
    initSvg('.__team h4 .__figure', 'svg-figure-dims', '32.99', '35.79', '532', '492', '#F7859C', '-1rem', '', '-0.5rem', '', 90, 1, svgFigure);
    initSvg('.__faq h4 .__figure', 'svg-figure-dims', '32.99', '35.79', '532', '492', '#9093D1', '-1rem', '', '-0.5rem', '', 90, 1, svgFigure);
    initSvg('footer h4 .__figure', 'svg-figure-dims', '32.99', '35.79', '532', '492', '#9093D1', '-1rem', '', '-0.5rem', '', 90, 1, svgFigure);

    // Wave
    initSvg('.__collection', 'svg-wave0-dims', '', '', '1440', '137', '#FBF1E6', '0', '0', '', '0', 0, 1, svgWaveBottom);
    initSvg('.__releases', 'svg-wave1-dims', '', '', '1440', '140', '#FBF1E6', '0', '0', '0', '', 0, 1, svgWaveTp);
    initSvg('.__releases', 'svg-wave0-dims', '', '', '1440', '137', '#FDDBE2', '0', '0', '', '0', 0, 1, svgWaveBottom);
    initSvg('.__faq', 'svg-wave1-dims', '', '', '1440', '140', '#FDDBE2', '0', '0', '0', '', 0, 1, svgWaveTp);
    initSvg('.__faq', 'svg-wave0-dims', '', '', '1440', '137', '#D3D4ED', '0', '0', '', '0', 0, 1, svgWaveBottom);

    // Box item 
    initSvg('.__releases .__box-item-0', 'svg-figure-dims', '532', '492', '532', '492', '#FDDBE2', '25%', '25%', '', '', 0, 1, svgFigure);
    initSvg('.__releases .__box-item-1', 'svg-figure-dims', '532', '492', '532', '492', '#FDDBE2', '25%', '25%', '', '', 0, 1, svgFigure);
    initSvg('.__releases .__box-item-2', 'svg-figure-dims', '532', '492', '532', '492', '#FDDBE2', '25%', '25%', '', '', 0, 1, svgFigure);
    initSvg('.__releases .__box-item-3', 'svg-figure-dims', '532', '492', '532', '492', '#FDDBE2', '25%', '25%', '', '', 0, 1, svgFigure);
    initSvg('.__releases .__box-item-4', 'svg-figure-dims', '532', '492', '532', '492', '#FDDBE2', '25%', '25%', '', '', 0, 1, svgFigure);
    initSvg('.__releases .__box-item-5', 'svg-figure-dims', '532', '492', '532', '492', '#FDDBE2', '25%', '25%', '', '', 0, 1, svgFigure);

    // Box rate 
    initSvg('.__releases .__box-item-0 .__box-rate', 'svg-figure-dims', '32.99', '35.79', '532', '492', '#F7859C', '-1rem', '', '-0.25rem', '', 270, 1, svgFigure);
    initSvg('.__releases .__box-item-1 .__box-rate', 'svg-figure-dims', '32.99', '35.79', '532', '492', '#F7859C', '-1rem', '', '-0.25rem', '', 270, 1, svgFigure);
    initSvg('.__releases .__box-item-2 .__box-rate', 'svg-figure-dims', '32.99', '35.79', '532', '492', '#F7859C', '-1rem', '', '-0.25rem', '', 270, 1, svgFigure);
    initSvg('.__releases .__box-item-3 .__box-rate', 'svg-figure-dims', '32.99', '35.79', '532', '492', '#F7859C', '-1rem', '', '-0.25rem', '', 270, 1, svgFigure);
    initSvg('.__releases .__box-item-4 .__box-rate', 'svg-figure-dims', '32.99', '35.79', '532', '492', '#F7859C', '-1rem', '', '-0.25rem', '', 270, 1, svgFigure);
    initSvg('.__releases .__box-item-5 .__box-rate', 'svg-figure-dims', '32.99', '35.79', '532', '492', '#F7859C', '-1rem', '', '-0.25rem', '', 270, 1, svgFigure);

    // Tier 
    for (let i = 0; i < 5; i++) {
        for (let k = 0; k < 5; k++) {
            initSvg(`.__rarity #box-h5-${i}`, 'svg-figure-dims', '17', '18', '532', '492', '#FF8961', '', '', '', '', 90, 1, svgFigure);
        }
    }
};
