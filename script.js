document.documentElement.classList.add("js");
      setTimeout(
        () => document.documentElement.classList.add("ready"),
        matchMedia("(prefers-reduced-motion:reduce)").matches ? 0 : 1500,
      );
      /* ===== Edit your content here ===== */
      const D = {
        email: "ashutoshhsharma2005@gmail.com",
        github: "https://github.com/Ashutoshh-Sharma",
        linkedin: "https://linkedin.com/in/ashutoshh-sharma",
        resume:
          "https://drive.google.com/file/d/1XkzmbR3tosWRByuPtpOgS_fNkhef5gNF/view",
        caps: [
          [
            "Frontend development",
            [
              "React",
              "JavaScript",
              "HTML",
              "CSS",
              "Tailwind CSS",
              "Responsive interfaces",
            ],
          ],
          [
            "Backend development",
            [
              "Python",
              "FastAPI",
              "Flask",
              "REST API development",
              "JWT authentication",
              "Role-based access control",
            ],
          ],
          [
            "Databases and systems",
            [
              "MySQL",
              "PostgreSQL",
              "Microsoft SQL Server",
              "Database design",
              "SQL",
            ],
          ],
          [
            "Computer science",
            [
              "Data structures and algorithms",
              "Object-oriented programming",
              "DBMS",
              "Operating systems",
              "Computer networks",
            ],
          ],
          [
            "AI and intelligent applications",
            [
              "AI-powered applications",
              "Resume parsing workflows",
              "Machine learning exploration",
              "Intelligent automation",
            ],
          ],
        ],
        projects: [
          {
            name: "TalentIQ AI",
            cat: "AI-powered recruitment platform",
            desc: "An AI-powered recruitment platform designed to help recruiters manage job postings, applications and candidate shortlisting.",
            feats: [
              "JWT-based authentication",
              "Role-based access control",
              "Resume upload and parsing workflows",
              "Candidate information extraction",
              "Recruiter dashboard",
              "Applicant tracking and hiring workflow management",
            ],
            tech: ["React", "FastAPI", "PostgreSQL"],
            github: "",
            demo: "",
            mock: "talent",
          },
          {
            name: "BookNStay",
            cat: "Hotel management system",
            desc: "A hotel management web application designed to simplify hotel operations and administration.",
            feats: [
              "Room management and availability",
              "Reservation management",
              "Customer and staff records",
              "Maintenance requests",
              "Invoice generation, billing and checkout",
            ],
            tech: ["Flask", "MySQL"],
            github: "",
            demo: "",
            mock: "hotel",
          },
        ],
        edu: [
          [
            "2025–2027",
            "Master of Computer Applications (MCA)",
            "Manipal University Jaipur",
            "CGPA 9.68/10",
          ],
          [
            "2022–2025",
            "Bachelor of Computer Applications (BCA)",
            "Rajasthan Swayat Shasan P. G. Mahavidyalaya, University of Rajasthan",
            "78.93%",
          ],
          ["2021–2022", "Class XII", "Jaipur Cambridge Academy", "83%"],
          ["2019–2020", "Class X", "Jaipur Cambridge Academy", "76.50%"],
        ],
        ach: [
          [
            "Academics",
            "Maintaining a 9.68/10 CGPA in MCA at Manipal University Jaipur.",
          ],
          [
            "Certification",
            "Completed Python Essentials 1, Cisco Networking Academy.",
          ],
          [
            "Certification",
            "Completed Python Essentials 2, Cisco Networking Academy.",
          ],
          ["Hackathon", "Selected as a finalist in the IIC 3.0 Hackathon."],
        ],
      };
      const $ = (s) => document.querySelector(s),
        $$ = (s) => [...document.querySelectorAll(s)];
      const RM = matchMedia("(prefers-reduced-motion:reduce)").matches;
      /* hero words */
      $("#h1").innerHTML = $("#h1")
        .textContent.split(" ")
        .map((w, i) => `<span class="wd"><i style="--i:${i}">${w}</i></span>`)
        .join(" ");
      /* links */
      $("#mail").href = "mailto:" + D.email;
      $("#mail").textContent = D.email;
      $("#gh").href = D.github;
      $("#li").href = D.linkedin;
      const rs = $("#resume");
      if (D.resume) {
        rs.href = D.resume;
      } else {
        rs.href =
          "mailto:" +
          D.email +
          "?subject=" +
          encodeURIComponent("Resume request");
        rs.removeAttribute("target");
      }
      /* capabilities */
      $("#caps").innerHTML = D.caps
        .map(
          (c, i) =>
            `<div class="cap${i ? "" : " open"}"><button aria-expanded="${!i}"><span class="n">${String(i + 1).padStart(2, "0")}</span><span class="t">${c[0]}</span><span class="pl" aria-hidden="true">+</span></button><div class="bx"><ul>${c[1].map((x) => `<li>${x}</li>`).join("")}</ul></div></div>`,
        )
        .join("");
      $("#caps").addEventListener("click", (e) => {
        const b = e.target.closest("button");
        if (!b) return;
        const c = b.parentElement,
          o = !c.classList.contains("open");
        c.classList.toggle("open", o);
        b.setAttribute("aria-expanded", o);
      });
      /* mockups */
      const CS = ["Applied", "Screening", "Shortlisted", "Hired"],
        RS = ["Available", "Occupied", "Cleaning", "Maintenance"];
      const cands = ["A", "B", "C", "D", "E"]
        .map(
          (l, i) =>
            `<div class="row"><span class="av">${l}</span><span class="nm">Candidate ${l}<small>Parsed resume</small></span><button class="chip c${i % 4}" data-k="c" data-i="${i % 4}">${CS[i % 4]}</button></div>`,
        )
        .join("");
      const rooms = [101, 102, 103, 104, 201, 202, 203, 204]
        .map(
          (r, i) =>
            `<button class="rm rm${i % 4}" data-k="r" data-i="${i % 4}"><b>${r}</b><span>${RS[i % 4]}</span></button>`,
        )
        .join("");
      const MOCK = {
        talent: `<div class="mock" aria-label="Illustrative TalentIQ AI dashboard preview"><div class="mh"><i></i><i></i><i></i><span>Illustrative preview</span></div><div class="mb"><div class="sd"><div class="a">Candidates</div><div>Job postings</div><div>Applications</div><div>Shortlist</div></div><div class="mc"><h4>Recruiter dashboard</h4><div class="stg">${CS.map((s) => `<span>${s}</span>`).join("")}</div>${cands}<p class="hint">Sample data. Click a status to move a candidate along.</p></div></div></div>`,
        hotel: `<div class="mock" aria-label="Illustrative BookNStay dashboard preview"><div class="mh"><i></i><i></i><i></i><span>Illustrative preview</span></div><div class="mb"><div class="sd"><div class="a">Rooms</div><div>Reservations</div><div>Customers</div><div>Staff</div><div>Maintenance</div><div>Billing</div></div><div class="mc"><h4>Room management</h4><div class="rms">${rooms}</div><p class="hint">Sample data. Click a room to change its status.</p></div></div></div>`,
      };
      $("#plist").innerHTML = D.projects
        .map(
          (p, i) =>
            `<article class="proj"><div><span class="pn">PROJECT ${String(i + 1).padStart(2, "0")}</span><h3>${p.name}</h3><p class="cat">${p.cat}</p><p>${p.desc}</p><ul class="f">${p.feats.map((f) => `<li>${f}</li>`).join("")}</ul><div class="tags">${p.tech.map((t) => `<span>${t}</span>`).join("")}</div><div class="links">${p.github ? `<a class="btn" href="${p.github}" target="_blank" rel="noopener">Project repository ↗</a>` : `<span class="project-link-note">Project repository link to be added</span>`}${p.demo ? `<a class="btn p" href="${p.demo}" target="_blank" rel="noopener">Live demo ↗</a>` : ""}</div></div>${MOCK[p.mock]}</article>`,
        )
        .join("");
      $("#plist").addEventListener("click", (e) => {
        const b = e.target.closest("[data-k]");
        if (!b) return;
        const k = b.dataset.k,
          L = k == "c" ? CS : RS,
          P = k == "c" ? "c" : "rm",
          n = (+b.dataset.i + 1) % 4;
        b.dataset.i = n;
        b.className = (k == "c" ? "chip " : "rm ") + P + n;
        if (k == "c") b.textContent = L[n];
        else b.querySelector("span").textContent = L[n];
      });
      /* journey */
      $("#tl").innerHTML = D.edu
        .map(
          (e) =>
            `<div class="ev"><span class="y">${e[0]}</span><div><h3>${e[1]}</h3><p>${e[2]}</p></div><span class="sc">${e[3]}</span></div>`,
        )
        .join("");
      $("#ach").innerHTML = D.ach
        .map((a) => `<li><span>${a[0]}</span>${a[1]}</li>`)
        .join("");
      /* clock */
      const tick = () => {
        $("#clk").textContent =
          new Intl.DateTimeFormat("en-GB", {
            timeZone: "Asia/Kolkata",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }).format(new Date()) + " local time";
      };
      tick();
      setInterval(tick, 30000);
      /* nav */
      const tg = $("#tg"),
        mn = $("#mn");
      tg.onclick = () => {
        const o = mn.classList.toggle("open");
        tg.setAttribute("aria-expanded", o);
      };
      mn.addEventListener("click", (e) => {
        if (e.target.tagName == "A") {
          mn.classList.remove("open");
          tg.setAttribute("aria-expanded", "false");
        }
      });
      const map = { journey: "projects", why: "projects" };
      new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (e.isIntersecting) {
              const id = map[e.target.id] || e.target.id;
              $$(".menu a").forEach((a) =>
                a.classList.toggle("on", a.getAttribute("href") == "#" + id),
              );
            }
          }),
        { rootMargin: "-45% 0px -50% 0px" },
      ).observe && $$("section").forEach((s) => 0);
      const spy = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (e.isIntersecting) {
              const id = map[e.target.id] || e.target.id;
              $$(".menu a").forEach((a) =>
                a.classList.toggle("on", a.getAttribute("href") == "#" + id),
              );
            }
          }),
        { rootMargin: "-45% 0px -50% 0px" },
      );
      $$("section").forEach((s) => spy.observe(s));
      /* reveal + progress */
      const io = new IntersectionObserver(
        (es) =>
          es.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          }),
        { threshold: 0.15 },
      );
      $$(".rv").forEach((x) => io.observe(x));
      const bar = $("#bar");
      addEventListener(
        "scroll",
        () => {
          const h = document.documentElement;
          bar.style.transform = `scaleX(${scrollY / Math.max(1, h.scrollHeight - innerHeight)})`;
        },
        { passive: true },
      );
      /* intro counter + marquee */
      const PL = [
        "Padharo mhare portfolio…",
        "Dal baati ban rahi hai…",
        "Chai chadha di…",
        "Jaipur se deploy ho raha hai…",
      ];
      const pn = $("#pn");
      if (pn) {
        const s = performance.now();
        (function c(n) {
          const p = Math.min(1, (n - s) / 1300);
          pn.textContent =
            Math.round(p * 100) + "%  " + PL[Math.min(3, (p * 4) | 0)];
          if (p < 1) requestAnimationFrame(c);
        })(s);
      }
      const T = [
        "Python",
        "FastAPI",
        "Flask",
        "React",
        "PostgreSQL",
        "MySQL",
        "SQL Server",
        "Tailwind CSS",
      ];
      $("#mqi").innerHTML = T.concat(T)
        .map((x) => `<span>${x}</span>`)
        .join("");
      /* 3D hero: interactive point-cloud sphere */
      (() => {
        return;
        const H = $("#home");
        let R;
        try {
          R = new THREE.WebGLRenderer({
            canvas: $("#gl"),
            antialias: true,
            alpha: true,
          });
        } catch (e) {
          return;
        }
        R.setPixelRatio(Math.min(devicePixelRatio, 2));
        const S = new THREE.Scene(),
          C = new THREE.PerspectiveCamera(40, 1, 0.1, 50);
        C.position.z = 6;
        const N = 3400,
          base = new Float32Array(N * 3),
          pos = new Float32Array(N * 3);
        for (let i = 0; i < N; i++) {
          const y = 1 - (2 * (i + 0.5)) / N,
            r = Math.sqrt(1 - y * y),
            a = i * 2.399963;
          base.set(
            [Math.cos(a) * r * 1.5, y * 1.5, Math.sin(a) * r * 1.5],
            i * 3,
          );
        }
        pos.set(base);
        const g = new THREE.BufferGeometry();
        g.setAttribute("position", new THREE.BufferAttribute(pos, 3));
        const col = getComputedStyle(document.documentElement)
          .getPropertyValue("--acc")
          .trim();
        const pts = new THREE.Points(
          g,
          new THREE.PointsMaterial({
            color: col,
            size: 0.03,
            transparent: true,
            opacity: 0.9,
          }),
        );
        const ring = new THREE.Mesh(
          new THREE.TorusGeometry(2.15, 0.004, 8, 180),
          new THREE.MeshBasicMaterial({
            color: col,
            transparent: true,
            opacity: 0.55,
          }),
        );
        ring.rotation.x = 1.25;
        const G = new THREE.Group();
        G.add(pts, ring);
        S.add(G);
        let B = 0,
          run = false,
          t = 0,
          px = 0,
          py = 0,
          sx = 0,
          sy = 0;
        const mw = new THREE.Vector3(),
          ml = new THREE.Vector3();
        const fit = () => {
          const w = H.clientWidth,
            h = H.clientHeight,
            d = w > 800;
          R.setSize(w, h, false);
          C.aspect = w / h;
          C.updateProjectionMatrix();
          G.position.set(d ? (w / h) * 1.1 : 0, d ? 0 : 0.9, 0);
          G.scale.setScalar(d ? 1 : 0.72);
        };
        const draw = () => {
          t += 0.01;
          B *= 0.94;
          sx += (px - sx) * 0.06;
          sy += (py - sy) * 0.06;
          G.rotation.y = t * 0.2 + sx * 0.6 + scrollY * 0.002;
          G.rotation.x = -sy * 0.35 + scrollY * 0.001;
          ring.rotation.z = t * 0.4;
          G.updateMatrixWorld(true);
          mw.set(sx * 1.6 * C.aspect, sy * 1.6, 1.6);
          ml.copy(mw);
          G.worldToLocal(ml);
          for (let i = 0; i < N; i++) {
            const j = i * 3,
              x = base[j],
              y = base[j + 1],
              z = base[j + 2],
              n =
                Math.sin(x * 2.2 + t) +
                Math.sin(y * 2.6 + t * 1.3) +
                Math.sin(z * 2.4 + t * 0.8),
              dx = x - ml.x,
              dy = y - ml.y,
              dz = z - ml.z,
              d = dx * dx + dy * dy + dz * dz,
              k =
                1 +
                n * 0.025 +
                (d < 0.9 ? (1 - d / 0.9) * 0.32 : 0) +
                B * (Math.sin(i * 12.9898) * 0.5 + 0.5) * 1.1;
            pos[j] = x * k;
            pos[j + 1] = y * k;
            pos[j + 2] = z * k;
          }
          g.attributes.position.needsUpdate = true;
          R.render(S, C);
        };
        const loop = () => {
          if (!run) return;
          draw();
          requestAnimationFrame(loop);
        };
        if (!RM)
          addEventListener("pointermove", (e) => {
            const r = H.getBoundingClientRect();
            px = Math.max(
              -1,
              Math.min(1, ((e.clientX - r.left) / r.width) * 2 - 1),
            );
            py = Math.max(
              -1,
              Math.min(1, -(((e.clientY - r.top) / r.height) * 2 - 1)),
            );
          });
        new IntersectionObserver((e) => {
          const v = e[0].isIntersecting;
          if (v && !run && !RM) {
            run = true;
            loop();
          } else if (!v) run = false;
        }).observe(H);
        H.addEventListener("pointerdown", () => {
          if (!RM) B = 1;
        });
        addEventListener("resize", () => {
          fit();
          draw();
        });
        fit();
        draw();
      })();
      /* 3D hero: liquid iridescent blob with orbiting satellites */
      (() => {
        return;
        const H = $("#home");
        let R;
        try {
          R = new THREE.WebGLRenderer({
            canvas: $("#gl"),
            antialias: true,
            alpha: true,
          });
        } catch (e) {
          return;
        }
        R.setPixelRatio(Math.min(devicePixelRatio, 2));
        const S = new THREE.Scene(),
          C = new THREE.PerspectiveCamera(40, 1, 0.1, 50);
        C.position.z = 6;
        const cv = (n) =>
          new THREE.Color(
            getComputedStyle(document.documentElement)
              .getPropertyValue(n)
              .trim(),
          );
        const U = {
          t: { value: 0 },
          m: { value: new THREE.Vector3(0, 0, 9) },
          k: { value: 0 },
          a: { value: cv("--c1") },
          b: { value: cv("--c2") },
          c: { value: cv("--c3") },
        };
        const M = new THREE.ShaderMaterial({
          uniforms: U,
          extensions: { derivatives: true },
          vertexShader: `uniform float t,k;uniform vec3 m;varying vec3 vP;
void main(){vec3 p=position;float n=sin(p.x*1.7+t)*cos(p.y*1.9+t*.8)+.5*sin(p.z*2.3+t*1.1+p.x);
vec3 w=(modelMatrix*vec4(p,1.)).xyz;float d=smoothstep(1.8,0.,distance(w,m));
p+=normalize(position)*(n*.22+d*.45+k*(.35+.2*sin(p.y*9.+t*6.)));
vec4 mv=modelViewMatrix*vec4(p,1.);vP=mv.xyz;gl_Position=projectionMatrix*mv;}`,
          fragmentShader: `uniform float t;uniform vec3 a,b,c;varying vec3 vP;
void main(){vec3 n=normalize(cross(dFdx(vP),dFdy(vP)));float f=pow(1.-abs(n.z),1.6);
vec3 col=mix(mix(a,b,.5+.5*sin(n.y*2.4+t*.6+n.x)),c,f*1.1);col+=pow(abs(n.z),24.)*.35;gl_FragColor=vec4(col,1.);}`,
        });
        const geo = new THREE.IcosahedronGeometry(1.4, 40),
          G = new THREE.Group(),
          core = new THREE.Mesh(geo, M);
        G.add(core);
        const sat = [
          [0.26, 2.7, 0],
          [0.17, 3.4, 2.1],
        ].map(([s, r, o]) => {
          const m = new THREE.Mesh(geo, M);
          m.scale.setScalar(s);
          m.userData = { r, o };
          G.add(m);
          return m;
        });
        S.add(G);
        let run = false,
          t = 0,
          px = 0,
          py = 0,
          sx = 0,
          sy = 0,
          K = 0;
        const fit = () => {
          const w = H.clientWidth,
            h = H.clientHeight,
            d = w > 800;
          R.setSize(w, h, false);
          C.aspect = w / h;
          C.updateProjectionMatrix();
          G.position.set(d ? (w / h) * 1.05 : 0, d ? 0 : 0.9, 0);
          G.scale.setScalar(d ? 1 : 0.6);
        };
        const draw = () => {
          t += 0.012;
          K *= 0.93;
          sx += (px - sx) * 0.06;
          sy += (py - sy) * 0.06;
          U.t.value = t;
          U.k.value = K;
          G.rotation.y = sx * 0.5 + scrollY * 0.002;
          G.rotation.x = -sy * 0.3;
          core.rotation.y = t * 0.15;
          sat.forEach((m) => {
            const a = t * 0.5 + m.userData.o,
              r = m.userData.r;
            m.position.set(
              Math.cos(a) * r,
              Math.sin(a * 1.3) * 0.9,
              Math.sin(a) * r,
            );
          });
          U.m.value.set(sx * 1.6 * C.aspect, sy * 1.6, 1.6);
          R.render(S, C);
        };
        const loop = () => {
          if (!run) return;
          draw();
          requestAnimationFrame(loop);
        };
        if (!RM)
          addEventListener("pointermove", (e) => {
            const r = H.getBoundingClientRect();
            px = Math.max(
              -1,
              Math.min(1, ((e.clientX - r.left) / r.width) * 2 - 1),
            );
            py = Math.max(
              -1,
              Math.min(1, -(((e.clientY - r.top) / r.height) * 2 - 1)),
            );
          });
        new IntersectionObserver((e) => {
          const v = e[0].isIntersecting;
          if (v && !run && !RM) {
            run = true;
            loop();
          } else if (!v) run = false;
        }).observe(H);
        H.addEventListener("pointerdown", () => {
          if (!RM) K = 1;
        });
        addEventListener("resize", () => {
          fit();
          draw();
        });
        fit();
        draw();
      })();
      /* 3D tilt on project previews */
      if (!RM)
        $$(".mock").forEach((m) => {
          const gl = document.createElement("div");
          gl.className = "gl";
          m.append(gl);
          m.addEventListener("pointermove", (e) => {
            if (e.pointerType !== "mouse") return;
            const r = m.getBoundingClientRect(),
              x = (e.clientX - r.left) / r.width,
              y = (e.clientY - r.top) / r.height;
            m.style.transform = `perspective(1100px) rotateY(${(x - 0.5) * 11}deg) rotateX(${(0.5 - y) * 9}deg) scale(1.015)`;
            m.style.setProperty("--gx", x * 100 + "%");
            m.style.setProperty("--gy", y * 100 + "%");
          });
          m.addEventListener("pointerleave", () => (m.style.transform = ""));
        });
      /* magnetic buttons */
      if (!RM)
        $$(".btn,.logo").forEach((b) => {
          b.addEventListener("pointermove", (e) => {
            if (e.pointerType !== "mouse") return;
            const r = b.getBoundingClientRect();
            b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.22}px,${(e.clientY - r.top - r.height / 2) * 0.32}px)`;
          });
          b.addEventListener("pointerleave", () => (b.style.transform = ""));
        });
      /* cursor ring */
      if (!RM && matchMedia("(hover:hover) and (pointer:fine)").matches) {
        const c = document.createElement("div");
        c.id = "cur";
        document.body.append(c);
        let x = 0,
          y = 0,
          cx = 0,
          cy = 0;
        addEventListener("pointermove", (e) => {
          x = e.clientX;
          y = e.clientY;
          c.style.opacity = 1;
          c.classList.toggle(
            "h",
            !!e.target.closest("a,button,input,textarea"),
          );
        });
        (function l() {
          cx += (x - cx) * 0.18;
          cy += (y - cy) * 0.18;
          c.style.transform = `translate(${cx}px,${cy}px)`;
          requestAnimationFrame(l);
        })();
      }
      /* humour, recruiter pill, bugs, terminal */
      const T0 = document.title;
      const favicon = document.querySelector("link[rel~='icon']");
      const F0 = favicon.href;

      const changeTabFavicon = (emoji) => {
        const canvas = document.createElement("canvas");
        canvas.width = 64;
        canvas.height = 64;

        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "#0b0b0d";
        ctx.beginPath();
        ctx.roundRect(0, 0, 64, 64, 14);
        ctx.fill();

        ctx.font = "48px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(emoji, 32, 34);

        favicon.href = canvas.toDataURL("image/png");
      };

      document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
          document.title = "Arre ruko! Main abhi bhi hireable hoon 🥺";
          changeTabFavicon("🥺");
        } else {
          document.title = T0;
          favicon.href = F0;
        }
      });
      const Q = [
        "Pixels, but make them behave.",
        "Where the 200 OK happens.",
        "Tables so tidy a librarian would cry.",
        "The unglamorous stuff that holds everything else up.",
        "Teaching software to read resumes so recruiters don’t have to.",
      ];
      $$(".cap ul").forEach((u, i) =>
        u.insertAdjacentHTML("afterbegin", `<li class="q">${Q[i] || ""}</li>`),
      );
      const J = [
        "Fluent in Python. Conversational in sarcasm.",
        "Chai ko REST API bana deta hoon.",
        "Dal baati churma in, clean code out.",
        "Bugs? Mere code mein nahi, mere excuses mein.",
        "Works on my machine. Aur aapki pe bhi. Maine check kiya.",
        "Seekhne ki bhookh: unlimited. Chai ki bhi.",
      ];
      let ji = 0;
      const jk = $("#jk"),
        jt = () => {
          jk.style.opacity = 0;
          setTimeout(() => {
            jk.textContent = J[ji++ % J.length];
            jk.style.opacity = 1;
          }, 300);
        };
      jt();
      setInterval(jt, 3600);
      const hp = document.createElement("a"),
        HL = [
          "Hiring? Padharo sa",
          "Chai pe charcha?",
          "Offer letter idhar bhejo",
        ];
      let hi = 0;
      hp.id = "hire";
      hp.href = `mailto:${D.email}?subject=${encodeURIComponent("Saw your portfolio, let’s talk")}`;
      hp.textContent = HL[0];
      document.body.append(hp);
      setInterval(() => {
        hp.textContent = HL[++hi % HL.length];
      }, 3500);
      const H0 = $("#home"),
        NB = 0;
      let sq = 0;
      const bc = {};
      const bs = () =>
        (bc.textContent =
          sq < NB
            ? `Bugs squashed: ${sq}/${NB}`
            : "Zero bugs left. Imagine me on your team.");
      bs();
      for (let i = 0; i < NB; i++) {
        const b = document.createElement("button");
        b.className = "bug";
        b.setAttribute("aria-label", "Squash bug");
        b.textContent = "🐛";
        b.style.cssText = `left:${8 + Math.random() * 80}%;top:${18 + Math.random() * 60}%;animation-duration:${9 + Math.random() * 8}s;animation-delay:-${Math.random() * 9}s`;
        b.onclick = () => {
          if (b.disabled) return;
          b.disabled = true;
          b.textContent = "💥";
          b.classList.add("dead");
          sq++;
          bs();
          if (sq == NB) hp.classList.add("hot");
        };
        H0.append(b);
      }
      const tm = $("#term"),
        to = $("#to"),
        ti = $("#ti");
      let last = null;
      const say = (s) => {
        const d = document.createElement("div");
        d.textContent = s;
        to.append(d);
        to.scrollTop = 1e9;
      };
      const opn = () => {
        last = document.activeElement;
        tm.hidden = false;
        if (!to.children.length)
          say("Khamma Ghani! Type help. Recruiters: try hire.");
        ti.focus();
      };
      const cls = () => {
        tm.hidden = true;
        last && last.focus && last.focus();
      };
      const CM = {
        help: () =>
          "help, about, skills, projects, hire, coffee, joke, whoami, clear, exit",
        about: () =>
          "Ashutosh Sharma. MCA at Manipal Jaipur, 9.68 CGPA. Builds backends and the occasional frontend. Breaks nothing on purpose.",
        skills: () =>
          "Python, FastAPI, Flask, React, SQL (MySQL, PostgreSQL, SQL Server), DSA, OOP, DBMS, OS, networks. Fluent in chai.",
        projects: () => {
          setTimeout(() => {
            cls();
            location.hash = "projects";
          }, 500);
          return "Teleporting to projects...";
        },
        hire: () => {
          setTimeout(
            () =>
              (location.href =
                "mailto:" +
                D.email +
                "?subject=" +
                encodeURIComponent("Saw your terminal. Let’s talk.")),
            600,
          );
          return "Excellent decision. Opening an email draft...";
        },
        coffee: () =>
          "      ( (\n       ) )\n    .______.\n    |      |]\n    \\      /\n     `----'\nChai preferred. Coffee accepted.",
        joke: () => J[(Math.random() * J.length) | 0],
        whoami: () =>
          "A developer with a debugger, a sense of humour and an open inbox.",
        exit: () => {
          cls();
          return "";
        },
      };
      ti.addEventListener("keydown", (e) => {
        if (e.key !== "Enter") return;
        const v = ti.value.trim(),
          k = v.toLowerCase();
        ti.value = "";
        say("$ " + v);
        if (k === "clear") {
          to.innerHTML = "";
          return;
        }
        const r =
          k === "sudo hire"
            ? CM.hire()
            : k.startsWith("rm -rf")
              ? "Nice try. I keep backups, and a recruiter is watching."
              : CM[k]
                ? CM[k]()
                : k
                  ? `command not found: ${v}. Try help, or hire.`
                  : "";
        if (r) say(r);
      });
      $("#tbtn").onclick = opn;
      $("#tx").onclick = cls;
      addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !tm.hidden) cls();
        else if (
          e.key === "`" &&
          !/INPUT|TEXTAREA/.test(document.activeElement.tagName)
        ) {
          e.preventDefault();
          tm.hidden ? opn() : cls();
        }
      });
      /* recruiter section: edit W to change the content */
      const W = {
        stats: [
          [9.68, 2, "CGPA in MCA, out of 10"],
          [2, 0, "Full projects built"],
          [2, 0, "Cisco Python certifications"],
          [1, 0, "Hackathon finalist, IIC 3.0"],
        ],
        why: [
          [
            "Ships end to end.",
            "TalentIQ AI ties React, FastAPI and PostgreSQL together: login, roles, resume parsing and a recruiter dashboard.",
          ],
          [
            "Fundamentals first.",
            "DSA, OOP, DBMS, operating systems and networks, so I fix causes, not symptoms.",
          ],
          [
            "Consistent and curious.",
            "9.68 CGPA in MCA, Cisco Python Essentials 1 and 2, and an IIC 3.0 hackathon finalist.",
          ],
          [
            "Product-minded.",
            "BookNStay handles rooms, reservations, billing and checkout, built around the people who run a hotel.",
          ],
          [
            "Eager to learn.",
            "I read the docs, ask sharper questions and treat every project as a lesson plan. Machine learning and intelligent automation are next on my list.",
          ],
        ],
        chk: [
          "Python backend (FastAPI, Flask)",
          "React frontend",
          "SQL databases (MySQL, PostgreSQL)",
          "REST APIs with JWT authentication",
          "Role-based access control",
          "DSA and OOP fundamentals",
          "AI-powered features (resume parsing)",
          "Hackathon experience",
          "Eager to learn (non-negotiable)",
        ],
      };
      $("#rs").innerHTML = W.why
        .map((w) => `<li><h3>${w[0]}</h3><p>${w[1]}</p></li>`)
        .join("");
      $("#stats").innerHTML = W.stats
        .map(
          (s) =>
            `<div><b data-v="${s[0]}" data-d="${s[1]}">${s[0]}</b><span>${s[2]}</span></div>`,
        )
        .join("");
      new IntersectionObserver(
        (es, ob) => {
          if (!es[0].isIntersecting) return;
          ob.disconnect();
          if (RM) return;
          $$("#stats b").forEach((b) => {
            const v = +b.dataset.v,
              d = +b.dataset.d,
              s = performance.now();
            (function f(n) {
              const p = Math.min(1, (n - s) / 1100);
              b.textContent = (v * (1 - Math.pow(1 - p, 3))).toFixed(d);
              if (p < 1) requestAnimationFrame(f);
            })(s);
          });
        },
        { threshold: 0.5 },
      ).observe($("#stats"));
      const cl = $("#cl"),
        cb = $("#cb"),
        cm = $("#cm");
      cl.innerHTML = W.chk
        .map(
          (x) =>
            `<li><button type="button" aria-pressed="false"><i aria-hidden="true">✓</i>${x}</button></li>`,
        )
        .join("");
      const upd = () => {
        const n = $$("#cl .on").length,
          N = W.chk.length;
        cb.style.width = (n / N) * 100 + "%";
        cm.textContent =
          n == N
            ? `${n}/${N} matched. Offer letter, anyone?`
            : `Match: ${n}/${N}`;
        hp.classList.toggle("hot", n == N);
      };
      cl.addEventListener("click", (e) => {
        const b = e.target.closest("button");
        if (!b) return;
        const o = b.classList.toggle("on");
        b.setAttribute("aria-pressed", o);
        upd();
      });
      new IntersectionObserver(
        (es, ob) => {
          if (!es[0].isIntersecting) return;
          ob.disconnect();
          $$("#cl button").forEach((b, i) =>
            setTimeout(
              () => {
                b.classList.add("on");
                b.setAttribute("aria-pressed", "true");
                upd();
              },
              RM ? 0 : 300 + i * 320,
            ),
          );
        },
        { threshold: 0.4 },
      ).observe(cl);
      $("#oh").href =
        `mailto:${D.email}?subject=${encodeURIComponent("Opportunity for Ashutosh: let’s talk")}`;
      $("#sum").onclick = async (e) => {
        const b = e.currentTarget,
          s = `Ashutosh Sharma, Software / Full-Stack / Backend Developer, Jaipur, India.\nMCA, Manipal University Jaipur (CGPA 9.68). Python, FastAPI, Flask, React, SQL.\nProjects: TalentIQ AI (React, FastAPI, PostgreSQL) and BookNStay (Flask, MySQL).\nEmail: ${D.email}\nGitHub: ${D.github}\nLinkedIn: ${D.linkedin}`;
        try {
          await navigator.clipboard.writeText(s);
          b.textContent = "Copied. Forward away.";
        } catch (x) {
          cm.textContent = "Copy failed. Email me and I’ll send the summary.";
        }
        setTimeout(() => (b.textContent = "Copy 30-second summary"), 2200);
      };
      /* hero: lanyard badge + cursor spotlight */
      (() => {
        const H = $("#home"),
          p = $(".pend"),
          cardShell = $(".card"),
          c = $(".card-inner"),
          ft = $(".ft"),
          bk = $(".bk");
        let fl = 0,
          tx = 0,
          ty = 0;
        $("#b1").href = "mailto:" + D.email;
        $("#b2").href = D.github;
        $("#b3").href = D.linkedin;
        bk.inert = true;
        const ap = () => {
          c.classList.toggle("is-flipped", !!fl);
          c.style.setProperty("--tilt-x", tx + "deg");
          c.style.setProperty("--tilt-y", ty + "deg");
          bk.inert = !fl;
          ft.inert = !!fl;
          c.dataset.flipped = fl ? "true" : "false";
          $$(".flp").forEach((button) => button.setAttribute("aria-pressed", String(!!fl)));
        };
        p.addEventListener("pointermove", (e) => {
          if (RM || e.pointerType !== "mouse") return;
          const r = cardShell.getBoundingClientRect(),
            x = (e.clientX - r.left) / r.width - 0.5,
            y = (e.clientY - r.top) / r.height - 0.5;
          tx = x * 22;
          ty = -y * 18;
          c.style.setProperty("--gx", (x + 0.5) * 100 + "%");
          c.style.setProperty("--gy", (y + 0.5) * 100 + "%");
          ap();
        });
        p.addEventListener("pointerleave", () => {
          tx = ty = 0;
          ap();
        });
        cardShell.addEventListener("click", (e) => {
          if (e.target.closest("a,button")) return;
          fl ^= 1;
          ap();
        });
        $$(".flp").forEach(
          (b) =>
            (b.onclick = () => {
              fl ^= 1;
              ap();
            }),
        );
        const sp = document.createElement("div");
        sp.className = "spot";
        H.prepend(sp);
        if (!RM)
          addEventListener("pointermove", (e) => {
            const r = H.getBoundingClientRect();
            sp.style.setProperty("--sx", e.clientX - r.left + "px");
            sp.style.setProperty("--sy", e.clientY - r.top + "px");
          });
      })();
      /* learning typewriter */
      const TW = [
        "machine learning",
        "AI-powered applications",
        "resume parsing workflows",
        "intelligent automation",
        "whatever your stack needs next",
      ];
      (() => {
        const el = $("#tw");
        let i = 0,
          j = 0,
          del = false;
        const step = () => {
          if (RM) {
            el.textContent = TW[0];
            return;
          }
          const w = TW[i];
          el.textContent = w.slice(0, j);
          if (!del && j < w.length) {
            j++;
            setTimeout(step, 70);
          } else if (!del) {
            del = true;
            setTimeout(step, 1600);
          } else if (j > 0) {
            j--;
            setTimeout(step, 35);
          } else {
            del = false;
            i = (i + 1) % TW.length;
            setTimeout(step, 300);
          }
        };
        step();
      })();
      /* contact */
      $("#cp").onclick = async (e) => {
        const b = e.currentTarget;
        try {
          await navigator.clipboard.writeText(D.email);
          b.textContent = "Copied. Smart move.";
        } catch (x) {
          b.textContent = D.email;
        }
        setTimeout(() => (b.textContent = "Copy email"), 2000);
      };
      $("#f").onsubmit = (e) => {
        e.preventDefault();
        const f = e.target,
          b = `${f.m.value}\n\n— ${f.n.value} (${f.e.value})`;
        $("#st").textContent =
          "Opening your email app with your message. If nothing opens, use the copy email button.";
        location.href = `mailto:${D.email}?subject=${encodeURIComponent("Portfolio message from " + f.n.value)}&body=${encodeURIComponent(b)}`;
      };


/* Recruiter-edition polish: transparent nav at top, subtle glass after scroll. */
(() => {
  const nav = document.querySelector("nav");
  if (!nav) return;

  const updateNav = () => {
    nav.classList.toggle("scrolled", window.scrollY > 28);
  };

  updateNav();
  window.addEventListener("scroll", updateNav, { passive: true });
})();

/* Give external project links safe defaults and make empty placeholders obvious. */
document.querySelectorAll('#plist a[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
  });
});
