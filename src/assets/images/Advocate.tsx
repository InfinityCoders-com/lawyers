import * as React from "react"

export function AdvocateBadge(props: any) {
  return (
        <div
            style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 0
            }}
        >
            <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                height="553"
                width="593"
                {...props}
            >
                <path
                    d="M466.018 21.364a200.002 200.002 0 01-390.657-2.827L159.649.64A113.831 113.831 0 00341.683 66.23 113.834 113.834 0 00381.997 2.25l84.021 19.114z"
                    fill="#D9EBFB"
                />
                <path
                    d="M180 136l99.209 40.083-170.705 416.616L.563 580.122 180 136z"
                    fill="#D9EBFB"
                />
                <path
                    d="M372.71 135.94l-99.209 40.083 170.705 416.616 107.941-12.576L372.71 135.94z"
                    fill="#D9EBFB"
                />
            </svg>
        </div>
    )
}
