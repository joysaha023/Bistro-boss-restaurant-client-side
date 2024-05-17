import { useEffect, useState } from "react";

const useMenu = () => {
    const [menuItems, setMenuItems] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => { setMenuItems(data); setLoading(false)})
    }, [])

    return [menuItems, loading]

}

export default useMenu;