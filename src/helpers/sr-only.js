export default function(selection) {
    return selection
    .style('position', 'absolute')
    .style('clip', 'rect(1px, 1px, 1px, 1px)')
    .style('padding', '0')
    .style('border', '0')
    .style('height', '1px')
    .style('width', '1px')
    .style('overflow', 'hidden');
}