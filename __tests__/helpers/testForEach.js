import inspect from 'object-inspect';

export default function testForEach(t, map, entriesList, predicate) {
    t.test('forEach()', (st) => {
        const output = [];
        let context;
        map.forEach((value, key, map) => {
            output.push([key, value]);
            if (!context) {
                context = map;
            }
        });

        for (let i = 0; i < output.length; i++) {
            const [obj, values] = output[i];
            const found = entriesList.filter((entry) => predicate(obj, entry))[0];
            
            st.ok(found, `\`forEach\` has element: ${inspect(obj)}`);

            if (values && found && found[1]) {
                st.deepEqual(values, found[1], `\`forEach\` has object elements`);
            } else {
                st.ok(values && typeof values === 'object', `\`forEach\` has object elements`)
            }
        }

        st.end();
    });
}