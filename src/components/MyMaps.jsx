import { Map, Marker } from "pigeon-maps"
import { useState } from "react"

const MyMaps = () => {

    const [hue, setHue] = useState(0)
  const color = `hsl(${hue % 360}deg 39% 70%)`

    return (
        <div>
            <Map height={500} defaultCenter={[24.885241, 91.862813]} defaultZoom={11}>
                <Marker
                    width={50}
                    anchor={[24.885241, 91.862813]}
                    color={color}
                    onClick={() => setHue(hue + 20)}
                />
                <Marker
                    width={50}
                    anchor={[24.885241, 91.862813]}
                    color={color}
                    onClick={() => setHue(hue + 20)}
                >
                    {/* <CustomIcon /> */}
                </Marker>
            </Map>        </div>
    )
}

export default MyMaps