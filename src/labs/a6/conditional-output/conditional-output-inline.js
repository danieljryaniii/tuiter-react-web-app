const ConditionalOutputInline = () => {
    const loggedIn = false;
    return (
        <>
            {loggedIn && <h2>Welcome Inline</h2>}
            {!loggedIn && <h2>Please Login Inline</h2>}
        </>
    );
};
export default ConditionalOutputInline;