const duration = 2000;
function createMask(defvar, id, fill) {
    defvar.append("mask")
        .attr("id", id)
        .append("rect")
        .attr("width", "0")
        .attr("height", "100%")
        .attr("fill", fill);
    }

function setMaskWidthAndAddTransition(maskRectSelector, widthPercentage, duration) {
const maskRect = d3.select(maskRectSelector);
maskRect
    .attr("width", "0%")
    .transition()
    .duration(duration)
    .attr("width", `${widthPercentage}%`);
}

function setAspectRatio(container, ratio) {
d3.select(container)
    .transition().duration(duration)
    .style("aspect-ratio", ratio);
}

//функція перемальовки
function reDraw(svgVar, itemToShow, itemToHide, commonClass, maskID) {
   

    svgVar.selectAll(`.${commonClass}:not(${itemToHide})`)
        .attr("opacity", 0);

    svgVar.selectAll(`.${commonClass}`)
        .attr("mask", null);

    svgVar.select(itemToShow)
        .attr("mask", `url(#mask${maskID})`)
        .attr("opacity", 1);

    svgVar.select(itemToHide)
        .attr("opacity", 1)
        .transition()
        .duration(duration)
        .attr("opacity", 0)

    setMaskWidthAndAddTransition(`#mask${maskID} rect`, 100, duration)


}


tippy('.teeth', { duration: 0, arrow: false });

// var scroller = scrollama();

function init(scroller, container, graphic, text, step, StepEnterFunction) {
    scroller.setup({
        container: container,
        graphic: graphic,
        text: text,
        step: step,
        offset: 0.5,
        debug: false,
    })
        .onStepEnter(StepEnterFunction);

}
