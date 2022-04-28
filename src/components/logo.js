import * as React from "react"

export default function Logo (props) {
  return (
  <svg width={35} height={32} xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>{"tryo_color"}</title>
    <g fill="#040738" fillRule="evenodd">
      <g opacity={0.85} fillRule="nonzero">
        <path d="m14.9 3.335 6.335 9.24a2.52 2.52 0 0 1-2.079 3.945H8.564a2.52 2.52 0 0 1-2.079-3.945l6.336-9.24a1.26 1.26 0 0 1 2.078 0Z" />
        <path d="m18.314.794 6.832 11.956a2.52 2.52 0 0 1-2.188 3.77H11.482a2.52 2.52 0 0 1-2.188-3.77L16.126.794a1.26 1.26 0 0 1 2.188 0Z" />
        <path d="m22.04 3.335 6.335 9.24a2.52 2.52 0 0 1-2.079 3.945H15.704a2.52 2.52 0 0 1-2.079-3.945l6.336-9.24a1.26 1.26 0 0 1 2.078 0Z" />
      </g>
      <text
        transform="translate(0 9.8)"
        fontFamily="RoobertTWHINT-Bold, Roobert TWHINT"
        fontSize={18.06}
        fontWeight="bold"
      >
        <tspan x={0} y={18}>
          {"tryo"}
        </tspan>
      </text>
    </g>
  </svg>
)
  }
