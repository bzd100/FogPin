window.addEventListener('load', function ()
{
  PinToTop();

  let lastUrl = location.href;
  new MutationObserver(() =>
  {
    const url = location.href;
    if (url !== lastUrl)
    {
      lastUrl = url;
      PinToTop();
    }
  }).observe(document, { subtree: true, childList: true });
})

function PinToTop()
{
  setTimeout(() =>
  {
    document.querySelectorAll("span.edit-buttons a")
      .forEach(el =>
        el.addEventListener("click", () =>
        {
          setTimeout(() =>
          {
            document.querySelectorAll("button")
              .forEach(el =>
                el.addEventListener("click", PinToTop))
          }, 2500)
        })
      );

    const eventsNode = document.querySelector("section.events")
    const articleList = document.querySelectorAll("section.events > article.event");

    articleList.forEach((article) =>
    {
      const bodyContentDivList = article.querySelectorAll("div.bodycontent");

      bodyContentDivList.forEach(div =>
      {
        if (div.textContent.includes("#PIN"))
        {
          eventsNode.insertBefore(article, eventsNode.firstElementChild);
        }
      })
    })
  }, 2500)
}

