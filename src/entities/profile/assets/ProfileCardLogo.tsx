interface ProfileCardLogoProps extends React.ComponentProps<"svg"> {
    primaryColor?: string;
    secondaryColor?: string;
}
export const ProfileCardLogo = ({
    primaryColor,
    secondaryColor,
    ...props
}: ProfileCardLogoProps) => (
    <svg
        width={159}
        height={156}
        viewBox="0 0 159 156"
        preserveAspectRatio="xMaxYMax"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <g opacity={0.2}>
            <path
                d="M70.3054 20.123V137.532L133.137 142.415L147.682 131.754L145.355 65.6353L138.328 53.9437L70.3054 20.123Z"
                fill={secondaryColor}
            />
            <path
                d="M2.59562 62.634C0.984544 63.6643 0 65.4113 0 67.2927V131.44C0 134.8 2.72987 137.532 6.08627 137.532H70.3054V20.123L2.59562 62.634Z"
                fill={primaryColor}
            />
            <path
                d="M122.128 155.942H135.106C139.447 155.942 143.52 154.778 147.055 152.717C150.635 150.656 153.634 147.7 155.692 144.116C157.796 140.577 159.004 136.411 159.004 132.022V67.3368C159.004 59.0944 154.752 51.4343 147.816 47.0892L74.5121 1.08416C72.6773 -0.0805281 70.3054 1.26334 70.3054 3.41352V20.1223L138.015 62.6332C139.626 63.6635 140.611 65.4105 140.611 67.292V131.977C140.611 132.962 140.342 133.903 139.85 134.754C139.358 135.605 138.642 136.277 137.836 136.77C136.986 137.263 136.091 137.487 135.106 137.487H70.3054V152.762C70.3054 154.509 71.6927 155.898 73.4381 155.898H122.128V155.942Z"
                fill={primaryColor}
            />
            <path
                d="M132.511 8.16211H121.188C118.939 8.16211 117.116 9.98717 117.116 12.2385V44.3569C117.116 46.6082 118.939 48.4333 121.188 48.4333H132.511C134.76 48.4333 136.583 46.6082 136.583 44.3569V12.2385C136.583 9.98717 134.76 8.16211 132.511 8.16211Z"
                fill={primaryColor}
            />
            <path
                d="M99.3944 84.4484C104.585 84.4484 108.792 80.2367 108.792 75.0413C108.792 69.846 104.585 65.6343 99.3944 65.6343C94.204 65.6343 89.9965 69.846 89.9965 75.0413C89.9965 80.2367 94.204 84.4484 99.3944 84.4484Z"
                fill={primaryColor}
            />
            <path
                d="M43.723 84.4484C48.9133 84.4484 53.1209 80.2367 53.1209 75.0413C53.1209 69.846 48.9133 65.6343 43.723 65.6343C38.5327 65.6343 34.3251 69.846 34.3251 75.0413C34.3251 80.2367 38.5327 84.4484 43.723 84.4484Z"
                fill={secondaryColor}
            />
            <path
                d="M110.09 97.9766C108.613 94.7961 105.525 92.7803 101.99 92.7803C99.3495 92.7803 96.9329 93.9002 95.277 95.8264C89.9516 102.143 81.0907 105.905 71.5137 105.905C71.111 105.905 70.7082 105.905 70.3054 105.905V123.734C70.7082 123.734 71.111 123.734 71.5137 123.734C86.1476 123.734 100.066 117.597 108.792 107.384C111.03 104.741 111.522 101.112 110.09 97.9318V97.9766Z"
                fill={primaryColor}
            />
            <path
                d="M47.795 95.8718C46.1392 93.9456 43.7226 92.8257 41.0822 92.8257C37.5916 92.8257 34.4589 94.7967 32.9821 98.022C31.5053 101.202 31.9976 104.831 34.2799 107.474C42.7381 117.418 56.1189 123.466 70.3053 123.779V105.951C61.2206 105.637 52.8968 101.919 47.795 95.9166V95.8718Z"
                fill={secondaryColor}
            />
        </g>
    </svg>
);
