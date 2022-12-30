import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import Typewriter from 't-writer.js';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isCollapsed:Boolean = false;
  isShown: Boolean = false;
  @Output () navbarclick:EventEmitter<boolean>=new EventEmitter();
  constructor(private router: Router) { }
  
  homeclick(){
  if(this.router.url!='/home')
    {
      this.navbarclick.emit(true);
      setTimeout(() => {
        this.router.navigateByUrl('/home');
      }, 400);
    }
  }
  aboutclick(){
    if(this.router.url!='/about')
    {
      this.navbarclick.emit(true);
      setTimeout(() => {
        this.router.navigateByUrl('/about');
      }, 400);
    }
  }

  postsclick(){
    if(this.router.url!='/posts')
   {
      this.navbarclick.emit(true);
      setTimeout(() => {
        this.router.navigateByUrl('/posts');
      }, 400);
    }
  }




  ngOnInit(): void {
    const target = document.querySelector('.tw');
    const writer = new Typewriter(target, {
      loop: true,
      typeSpeed: 50,
      deleteSpeed: 50,
      cursorColor: '#7A1A1A',
      typeColor: '#7A1A1A'
      
    })
    
    writer
      .changeTypeClass('urdufont')
      .type('فسانہِ دِل')
      .rest(1500)
      .clear()
      .type('fabulam cordis')
      .rest(1500)
      .clear()
      .type('فسانہِ دِل')
      .rest(1500)
      .clear()
      .type('ιστορία της καρδιάς')
      .rest(1500)
      .clear()
      .type('فسانہِ دِل')
      .rest(1500)
      .clear()
      .type('priča o srcu')
      .rest(1500)
      .clear()
      .type('فسانہِ دِل')
      .rest(1500)
      .clear()
      .type('قصة القلب')
      .rest(1500)
      .clear()
      .type('فسانہِ دِل')
      .rest(1500)
      .clear()
      .changeTypeClass('cyrillic')
      .type('История сердца')
      .rest(1500)
      .clear()
      .changeTypeClass('urdufont')
      .type('فسانہِ دِل')
      .rest(1500)
      .clear()
      .type('داستان قلب')
      .rest(1500)
      .clear()
      .type('فسانہِ دِل')
      .rest(1500)
      .clear()
      .type('kalbin hikayesi')
      .rest(1500)
      .clear()
      .type('فسانہِ دِل')
      .rest(1500)
      .clear()
      .type('दिल की कहानी')
      .rest(1500)
      .clear()
      .type('فسانہِ دِل')
      .rest(1500)
      .clear()
      .type("סיפור הלב")
      .rest(1500)
      .clear()
      .type('فسانہِ دِل')
      .rest(1500)
      .clear()
      .type("心的故事")
      .rest(1500)
      .clear()
      .type('فسانہِ دِل')
      .rest(1500)
      .clear()
      .type("心の物語")
      .rest(1500)
      .clear()
      .type('فسانہِ دِل')
      .rest(1500)
      .clear()
      .type("გულის ამბავი")
      .rest(1500)
      .clear()
      .type('فسانہِ دِل')
      .rest(1500)
      .clear()
      .type('เรื่องของหัวใจ')
      .rest(1500)
      .clear()
      .type('فسانہِ دِل')
      .rest(1500)
      .clear()
      .type('йөрәк хикәясе')
      .rest(1500)
      .clear()
      .type('فسانہِ دِل')
      .rest(1500)
      .clear()
      .type('دل جي ڪهاڻي')
      .rest(1500)
      .clear()
      .type('فسانہِ دِل')
      .rest(1500)
      .clear()
      .type('жүрек оқиғасы')
      .rest(1500)
      .clear()
      .start()
    
  }
  


}
