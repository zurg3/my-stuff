if (['m.vk.com', 'm.vkvideo.ru'].includes(window.location.host)) {
  const video = cur.apiPrefetchCache[0].response.items[0];

  if (video) {
    const output = [];

    const files = video.files || {};

    output.push(video.title);

    if (files.mp4_1080) output.push(`-> 1080p: ${files.mp4_1080}`);
    if (files.mp4_720) output.push(`-> 720p: ${files.mp4_720}`);
    if (files.mp4_480) output.push(`-> 480p: ${files.mp4_480}`);
    if (files.mp4_360) output.push(`-> 360p: ${files.mp4_360}`);
    if (files.mp4_240) output.push(`-> 240p: ${files.mp4_240}`);

    console.log(output.join('\n'));
  }
}
