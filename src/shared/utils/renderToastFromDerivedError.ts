export const renderToastFromDerivedError = {
    render: ({ data }: { data: { message: string } }) => {
        return data.message;
    },
};
