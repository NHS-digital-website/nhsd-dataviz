export default function slugify(Text) {
    return Text.toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
}
  