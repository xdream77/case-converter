module.exports = (obj, fn) =>
    Object.fromEntries(
        Object.entries(obj)
            .map(([key, value]) => [ fn(key), value ])
    );