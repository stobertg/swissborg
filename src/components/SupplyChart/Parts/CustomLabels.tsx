export const customLabel = {
  id: 'customLabel',
  afterDraw: (chart:any) => {
    const ctx = chart.ctx;
    ctx.save();

    const dataset = chart.data.datasets[0];
    const meta = chart.getDatasetMeta(0);

    meta.data.forEach((segment:any, index:any) => {
      ctx.fillStyle = dataset.backgroundColor[index];
      ctx.font = '$sansSerif';

      // Calculate position for text and color box
      const { startAngle, endAngle, outerRadius, innerRadius } = segment;
      const middleAngle = startAngle + (endAngle - startAngle) / 2;
      const labelRadius = outerRadius + 20; // Adjust distance from the chart
      const posX = chart.width / 2 + labelRadius * Math.cos(middleAngle);
      const posY = chart.height / 2 + labelRadius * Math.sin(middleAngle);

      // Adjust text alignment based on the angle
      ctx.textAlign = middleAngle < Math.PI ? 'left' : 'right';

      // Draw the color box (Optional)
      ctx.fillRect(posX, posY - 10, 20, 20);

      // Draw the text
      const textOffsetX = middleAngle < Math.PI ? 25 : -25;
      ctx.fillText(chart.data.labels[index], posX + textOffsetX, posY + 10);
    });

    ctx.restore();
  }
};