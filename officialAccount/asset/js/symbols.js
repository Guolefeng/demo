/**
 * @author 郭乐峰
 * @desc 直接引入就行，自己会挂载到body顶部
 */
const symbols = `
<svg style="position: absolute;width: 0;height: 0;visibility: hidden;">
<defs>
    <symbol viewBox="0 0 1000 1000" id="praise">
        <path d="M868.354104 567.118342c56.047504 0 84.071767-168.143535 0-168.143535L700.206476
            398.974807c168.147628-280.242635 46.413076-336.290139 0-336.290139 0 142.373615-209.370495
            301.023938-420.36293 364.314403L279.843546 875.380124l-56.047504 0L223.796042 426.993954l56.047504
            0 0-28.02938L167.749562 398.964574c-30.828123 0-56.047504 37.83777-56.047504 84.076884l0 336.291163c0
            46.239114 25.219381 84.070744 56.047504 84.070744l112.095008 0 0-28.018124c238.850923 24.823362 155.578358
            84.070744 392.338666 84.070744 56.047504 0 112.095008-28.02324 112.095008-84.070744 56.05262 0 84.076884-140.119271 
            56.05262-140.119271C896.378367 735.26597 932.281065 567.118342 868.354104 567.118342L868.354104 567.118342zM868.354104 567.118342" />
    </symbol>
</defs>
</svg>
`;

document.body.insertAdjacentHTML('afterBegin', symbols);