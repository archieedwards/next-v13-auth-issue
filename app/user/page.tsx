async function getUser() {
    const res = await fetch("http://localhost:3000/api/user", {
        'cache': 'no-cache',
    });

    if(! res.ok) {
        throw new Error(res.statusText);
    }

    return await res.json();
}

export default async function Page() {
    const user = await getUser();
    return (
        <div>
            <p>{ JSON.stringify(user) }</p>
        </div>
    );
}
