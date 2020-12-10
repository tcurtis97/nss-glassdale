
export const AlibisHTMLConverter = (associate) => {
    return `
        <section class="alibis">
            <div class="alibi_associates">Known Associates: ${associate.name}</div>
            <div class="alibi">alibi: ${associate.alibi}</div>
        </section>
    `
}

