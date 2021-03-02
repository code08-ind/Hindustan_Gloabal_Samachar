let newsAccordion = document.getElementById('newsAccordion');
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://gnews.io/api/v4/top-headlines?&topic=nation&country=in&lang=en&token=fc1609926229d26774785eb0847bf63e', true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let newsHTML = "";
        let articles = json.articles;
        articles.forEach(function (article, index) {
            let element = `<div class="card">
                                <div class="card-header" id="heading${index}">
                                    <h5 class="mb-0">
                                    <button class="btn btn-link collapsed" data-toggle="collapse"             data-target="#collapse${index}"
                                    aria-expanded="true" aria-controls="collapse${index}">
                                    <b>Breaking News ${index + 1} : </b>${article.title}
                                    </button>
                                    </h5>
                                </div>

                                <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccodion">
                                    <div class="card-body">
                                        ${article.content}. <a href="${article.url}" target="_blank">Read More About News</a>
                                    </div>
                                </div>
                            </div>`;
            newsHTML += element;
        });
        newsAccordion.innerHTML = newsHTML;
    }
    else {
        console.log("Error Occured")
    }
}

xhr.send();
