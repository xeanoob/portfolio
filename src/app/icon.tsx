import { ImageResponse } from 'next/og'

export const contentType = 'image/png'
export const size = {
    width: 192,
    height: 192,
}

export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 120,
                    background: 'black',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontFamily: 'serif',
                    fontWeight: 600,
                }}
            >
                AB.
            </div>
        ),
        { ...size }
    )
}
